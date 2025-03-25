import { ref, onMounted, onUnmounted } from 'vue';
import { throttle } from 'lodash';

export enum ResizableType {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
}

export function useResizable(options: {
    type:ResizableType;
    minWidth?: number;
    maxWidth?: number;
    initialWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    initialHeight?: number;
}) {
    const { type, minWidth = 100, maxWidth = 500, initialWidth = 200, minHeight = 100, maxHeight = 500, initialHeight = 200} = options;
    console.log('type',type)
    const width = ref<number>(initialWidth);
    const height = ref<number>(initialHeight);
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startWidth = 0;
    let startHeight = 0;

    const throttledOnDrag = throttle((e: MouseEvent) => {
        if (!isDragging) return;
        if(type === ResizableType.Horizontal){
            const offsetX = e.clientX - startX;
            const newWidth = startWidth + offsetX;
            if (newWidth >= minWidth && newWidth <= maxWidth) {
                width.value = newWidth;
            }
        }
        else if(type === ResizableType.Vertical){
            const offsetY = e.clientY - startY;
            const newHeight = startHeight + offsetY;
            if (newHeight >= minHeight && newHeight <= maxHeight) {
                height.value = newHeight;
            }
        }
    }, 16);

    const startDrag = (e: MouseEvent) => {
        isDragging = true;
        if(type === ResizableType.Horizontal){
            startX = e.clientX;
            startWidth = width.value;
        }else if(type === ResizableType.Vertical){
            startY = e.clientY;
            startHeight = height.value;
        }
        document.addEventListener('mousemove', throttledOnDrag);
        document.addEventListener('mouseup', stopDrag);
    };

    const stopDrag = () => {
        isDragging = false;
        document.removeEventListener('mousemove', throttledOnDrag);
        document.removeEventListener('mouseup', stopDrag);
    };

    onUnmounted(() => {
        document.removeEventListener('mousemove', throttledOnDrag);
        document.removeEventListener('mouseup', stopDrag);
    });

    return {
        width,
        height,
        startDrag,
    };
}