<template>
    <div class="qq-chat-input">
        <div class="toolbar">
            <button class="action-btn" @click="toggleEmojiPanel">
                <i class="far fa-smile">
                    <SvgIcon name="emoji" width="20px" height="20px" color="red"></SvgIcon>
                </i>
            </button>
            <button class="action-btn">
                <i class="far fa-image">
                    <SvgIcon name="good" width="20px" height="20px"></SvgIcon>
                </i>
            </button>
            <button class="action-btn">
                <i class="far fa-image">
                    <SvgIcon name="boom" width="20px" height="20px" color="red"></SvgIcon>
                </i>
            </button>
            <button class="action-btn">
                <i class="far fa-file-alt">
                    <SvgIcon name="cut" width="20px" height="20px"></SvgIcon>
                </i>
            </button>
            <button class="action-btn">
                <i class="far fa-file-alt">
                    <SvgIcon name="picture" width="20px" height="20px"></SvgIcon>
                </i>
                <input type="file" accept="image/*" class="file-input" multiple @change="handleImageUpload">
            </button>
            <button class="action-btn">
                <i class="far fa-file-alt">
                    <SvgIcon name="documnet" width="20px" height="20px"></SvgIcon>
                </i>
                <input type="file" class="file-input" multiple @change="handleImageUpload">
            </button>
        </div>

        <div class="emotion-panel">
            <span v-for="(emoji, index) in emojis" :key="index" class="emoji-item" @click="insertEmoji(emoji)">{{ emoji
            }}</span>
        </div>


        <div class="editor-box" @paste="handlePaste">
            <!-- 文件预览区域 -->
            <div v-if="files.length > 0" class="preview-container">
                <div v-for="(file, index) in files" :key="index" class="file-preview">
                    <span class="preview-remove" @click="removeFile(index)">×</span>
                    <i class="fas fa-file"></i>
                    <span>{{ file.name }}</span>
                </div>
            </div>
            <!-- 可编辑区域 -->
            <div ref="editor" class="editor" contenteditable="true" :placeholder="placeholder" @input="handleInput"
                @keydown.enter.exact.prevent="sendMessage"></div>
        </div>

        <div class="editor-footer">
            <el-button class="send-btn" color="#6BA6F5">发&nbsp;送</el-button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'QqChatInput',
    props: {
        placeholder: {
            type: String,
            default: '输入消息...'
        },
        emojiList: {
            type: Array,
            default: () => ['😀', '😁', '😂', '😃', '😄', '😅']
        },
        maxFileSize: {
            type: Number,
            default: 5 * 1024 * 1024 // 5MB
        }
    },
    data() {
        return {
            showEmojiPanel: false,
            files: [],
            editorContent: ''
        }
    },
    computed: {
        emojis() {
            return this.emojiList
        }
    },
    methods: {
        toggleEmojiPanel() {
            this.showEmojiPanel = !this.showEmojiPanel
        },

        insertEmoji(emoji) {
            const editor = this.$refs.editor
            const selection = window.getSelection()
            const range = selection.getRangeAt(0)
            const textNode = document.createTextNode(emoji)
            range.insertNode(textNode)
            range.collapse(false)
            this.$nextTick(() => editor.focus())
        },

        handleImageUpload(e) {
            this.handleFiles(e.target.files, 'image')
            e.target.value = '' // 清空选择
        },

        handleFileUpload(e) {
            this.handleFiles(e.target.files, 'file')
            e.target.value = '' // 清空选择
        },

        handleFiles(files, type) {
            Array.from(files).forEach(file => {
                if (file.size > this.maxFileSize) {
                    this.$emit('error', {
                        type: 'size-exceeded',
                        file,
                        maxSize: this.maxFileSize
                    })
                    return
                }

                if (type === 'image') {
                    this.previewImage(file)
                } else {
                    this.files.push(file)
                }
            })
        },

        previewImage(file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                const img = new Image()
                img.src = e.target.result
                img.onload = () => {
                    const editor = this.$refs.editor
                    const imgElement = document.createElement('img')
                    imgElement.src = e.target.result
                    imgElement.style.maxWidth = '200px'
                    editor.appendChild(imgElement)
                    this.$nextTick(() => editor.focus())
                }
            }
            reader.readAsDataURL(file)
        },

        removeFile(index) {
            this.files.splice(index, 1)
        },

        handleInput(e) {
            this.editorContent = e.target.innerHTML
        },

        handlePaste(e) {
            const items = e.clipboardData.items
            Array.from(items).forEach(item => {
                if (item.type.startsWith('image/')) {
                    const file = item.getAsFile()
                    this.previewImage(file)
                    e.preventDefault()
                }
            })
        },

        sendMessage() {
            const message = {
                content: this.editorContent,
                files: [...this.files]
            }

            this.$emit('send', message)

            // 清空内容
            this.$refs.editor.innerHTML = ''
            this.files = []
            this.showEmojiPanel = false
        }
    }
}
</script>

<style lang="scss">
.qq-chat-input {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    position: relative;

    .emotion-panel {
        position: absolute;
        left: 5px;
        bottom: calc(100% + 5px);
        background-color: white;
        box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
        padding: 15px;
    }

    .toolbar {
        height: $toolbar-height;
        display: flex;
        align-items: center;

        .far.fa-smile {
            color: red;
        }

        .action-btn {
            border: none;
            padding: 3px 6px;
            cursor: pointer;
            position: relative;
            background: none;

            .file-input {
                position: absolute;
                opacity: 0;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                cursor: pointer;
            }
        }
    }

    .editor-box {
        flex: 1;
    }

    .editor-footer {
        padding: 20px;
        text-align: end;

        .send-btn {
            width: 120px;
            height: 32px;
            color: white;
            font-size: $font-size-smaller;
            border-radius: 4px;
        }
    }

}
</style>