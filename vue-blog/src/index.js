import { createApp } from "vue/dist/vue.esm-bundler"
import App from "./App.vue"

const app = createApp(App)

app.config.errorHandler = (error) => {
  alert("ERROR: " + error.message)
}

app.mount("#app")
