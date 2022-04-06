<script setup>
import LogoPDAV from "../shared/LogoPDAV.vue"
</script>

<template>
  <div class="column full-width align-items-center">
    <div class="item">
      <div class="row justify-center">
        <div class="item">
          <LogoPDAV />
        </div>
      </div>
    </div>

    <div>
      <nav>
        <div class="row">
          <NavItem label="Home" link="/" />
          <NavItem label="Sobre" link="/about" />
          <NavItem label="Recursos" link="/resources" />
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
const NavItem = {
  props: ["label", "link"],
  template: `<div class="item">
    <a :href="this.link" rel="noreferrer">
      <h2 class="semi-bold">{{ this.label }}</h2>
    </a>
  </div>`,
}

export default {
  name: "NavBar",
  components: {
    NavItem,
  },
}
</script>

<style scoped></style>
