import Vue from "vue";
import Meta from "vue-meta";
import VueRouter from "vue-router";
import Buefy from "buefy";

import "buefy/dist/buefy.css";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(Meta);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/Home.vue"),
      meta: { title: "Home" }
    },
    {
      path: "/events",
      name: "events",
      component: () => import("./components/Events.vue"),
      meta: { title: "Events" }
    },
    {
      path: "/location",
      name: "location",
      component: () => import("./components/Location.vue"),
      meta: { title: "Location" }
    },
    {
      path: "/rental",
      name: "rental",
      component: () => import("./components/Rental.vue"),
      meta: { title: "Rental" }
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./components/Contact.vue"),
      meta: { title: "Contact Us" }
    },
    {
      path: "/links",
      name: "links",
      component: () => import("./components/Links.vue"),
      meta: { title: "Links" }
    }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
