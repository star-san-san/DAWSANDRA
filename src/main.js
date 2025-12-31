import { createApp } from 'vue';
/*import membrecomithome from './views/membrecomithome.vue';*/
import App from './App.vue';
/*import Home from './views/Home.vue';*/
import router from "./router";
createApp(App)
  .use(router)
  .mount("#app");