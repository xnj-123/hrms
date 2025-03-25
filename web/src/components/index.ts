import type { App, Component } from 'vue';
import SvgIcon from './SvgIcon/index.vue';
import SearchBar from './SearchBar/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const components: { [name: string]: Component } = { SvgIcon , SearchBar };

export default {
    install(app: App) {
        Object.keys(components).forEach((key: string) => {
            app.component(key, components[key]);
        });
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
         }
    }
}