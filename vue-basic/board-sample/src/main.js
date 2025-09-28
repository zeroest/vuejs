import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import GlobalComponent from '@/components/GlobalComponent.vue';

import { createApp } from 'vue';
import App from './App.vue';

let app = createApp(App);
/* 현재 Vue 애플리케이션에서 전역적으로 사용할 수 있도록 전역 등록 */
app.component('GlobalComponent', GlobalComponent);
app.mount('#app');
