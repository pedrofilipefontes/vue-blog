<script setup>
import NavBar from './components/molecules/NavBar.vue'
</script>

<template>
    <header class="fixed full-vw">
        <NavBar />
    </header>
    <div id="scrollable-content">
        <main></main>
        <footer></footer>
    </div>
</template>

<style>
@import './assets/base.css';
@import './assets/common.css';

#scrollable-content {
    height: 100%;
    overflow-y: scroll;
}

.fixed {
    position: fixed;
    background-color: var(--color-background);
}
</style>
