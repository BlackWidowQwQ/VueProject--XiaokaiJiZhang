import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import HeadTit from "@/components/HeadTit.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";

Vue.config.productionTip = false;

Vue.component("Nav", Nav);
Vue.component("HeadTit", HeadTit);
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

window.onload = function() {
  setTimeout(function() {
    window.scrollTo(0, 500);
  }, 0);
};

if (document.documentElement.clientWidth > 500) {
  window.alert(
    "检测到您使用非手机设备，请扫描二维码使用手机打开页面，效果更佳！"
  );
  const img = document.createElement("img");
  img.src = "./QRcode.png";
  img.style.position = "fixed";
  img.style.left = "50%";
  img.style.top = "50%";
  img.style.transform = "translate(-50%,-50%)";
  img.style.boxShadow = "0 0 10px rgba(0,0,0,0.25)";
  document.body.appendChild(img);
}
