import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueAgile from 'vue-agile';

createApp(App).use(store).use(router).use(Antd).use(VueAgile).mount('#app');
