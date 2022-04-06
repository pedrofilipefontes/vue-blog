<script setup>
import FeedThumb from "../atoms/FeedThumb.vue"
</script>

<template>
  <div class="row justify-center">
    <div>
      <div id="feed">
        <div class="column">
          <div class="item">
            <FeedThumb />
          </div>
          <div class="item">
            <FeedThumb />
          </div>
          <div class="item">
            <FeedThumb />
          </div>
          <div class="item">
            <FeedThumb />
          </div>
          <div class="item">
            <FeedThumb />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsFeed",
}
</script>

<style scoped>
#feed {
  width: 60vw;
}
</style>
