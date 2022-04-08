<script setup>
import NavBar from "./components/molecules/NavBar.vue"
import Footer from "./components/molecules/Footer.vue"
</script>

<template>
  <header class="full-vw">
    <NavBar />
  </header>
  <div id="scrollable-content">
    <main>
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style>
@import "./assets/base.css";
@import "./assets/common.css";

header {
  max-height: 250px;
}

#scrollable-content {
  padding: 4rem;
  position: static;
  height: calc(100vh - 250px);
  overflow-y: scroll;
}

footer {
  margin-top: 1.5rem;
}
</style>
