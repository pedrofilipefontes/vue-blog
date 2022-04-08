import { createApp } from "vue/dist/vue.esm-bundler"
import { createRouter, createWebHistory } from "vue-router"
import { About, PostsFeed, PostTemplate, Resources } from "./components/views"
import App from "./App.vue"

const app = createApp(App)

app.config.errorHandler = (error) => {
  alert("ERROR: " + error.message)
}

const routes = [
  { path: "/", component: PostsFeed, name: "Feed" },
  { path: "/post/id/:postId", component: PostTemplate, name: "PostTemplate" },
  { path: "/about", component: About, name: "About" },
  { path: "/resources", component: Resources, name: "Resources" },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router).mount("#app");
