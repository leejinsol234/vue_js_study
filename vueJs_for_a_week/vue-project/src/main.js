import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import mixins from './mixins';
import i18nPlugin from './plugins/i18n'; //i18n 플러그인 추가

const i18nStrings = {
    en: { hi: 'Hello!' },
    ko: { hi: '안녕하세요!' },
};

const app = createApp(App);
// app.directive('focus', {
//     mounted(el) {
//         el.focus();
//     },
// });
app.use(router);
app.mixin(mixins);
app.mount('#app');
app.use(i18nPlugin, i18nStrings); //i18n플러그인에 다국어 번역 데이터를 파라미터로 전달
