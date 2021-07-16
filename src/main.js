import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from "./mixins";
import i18nPlugin from "./plugins/i18n";
import store from "@/store";

const i18nStrings = {
    en: {
        hi: 'Hello'
    },
    ko: {
        hi: '안녕하세요!'
    }
}

const app = createApp(App)
app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})
app.use(store)
app.use(i18nPlugin, i18nStrings)
app.use(router)
app.mixin(mixins)
app.mount('#app')
window.Kakao.init('2b779b4669decc0ff04fd575e94223ce');
