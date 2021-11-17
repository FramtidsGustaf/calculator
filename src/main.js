import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import Button from './components/Button';

const app = createApp(App);

app.component('Button', Button);

app.use(store);

app.mount('#app')
