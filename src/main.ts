import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import myView from '@/components';
import myDemo from '@/views/components/myDemo.vue';

const app = createApp(App);
app.component('DemoBlock', myDemo);
app.use(myView);
app.use(store);
app.use(router);
app.mount('#app');
