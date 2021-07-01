import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import routes from "./routes"

// 路由配置
const router = new VueRouter({
    mode: "history",
    routes

})

export default router;