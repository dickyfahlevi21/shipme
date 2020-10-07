import Vue from "vue";
import VueRouter from "vue-router";
import FormShipping from "../pages/FormShipping/FormShipping.view.vue"
import LandingPage from "../pages/LandingPage/LandingPage.view.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "LandingPage",
        component: LandingPage
    },
    {
        path: "/form-shipping",
        name: "FormShipping",
        component: FormShipping
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;