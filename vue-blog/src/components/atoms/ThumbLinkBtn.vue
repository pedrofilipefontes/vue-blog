<script setup></script>

<template>
  <a :href="`/post/id/${postId}`">
    <button class="thumb-link-btn bold">{{ label }}</button>
  </a>
</template>

<script>
export default {
  name: "ThumbLinkBtn",
  props: ["label", "postId"],
}
</script>

<style scoped>
.thumb-link-btn {
  background-color: var(--main-green);
  border-radius: 0.3rem;
  padding: 0.5rem;
  border: none;
  color: var(--main-dark);
  cursor: pointer;
  transition: all ease-in 0.1s;
}
.thumb-link-btn:hover {
  background-color: var(--main-dark);
  color: var(--main-green);
}
</style>
