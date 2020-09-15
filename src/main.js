import Vue from "vue";
import App from "./App.vue";
import Home from "./component/home.vue";
import Seting from "./component/seting.vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
// import { auth } from "./firebase";
Vue.component("basic", Home);
Vue.component("seti", Seting);
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: "/seting", component: Seting },
    { path: "/", component: Home }
  ]
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
