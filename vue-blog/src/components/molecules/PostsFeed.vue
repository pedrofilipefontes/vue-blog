<script setup>
import FeedThumb from "../atoms/FeedThumb.vue"
import blogFeed from "../../mocks/blogFeed.json"
</script>

<template>
  <div class="row justify-center">
    <div>
      <div id="feed" v-if="blogFeed.length > 0">
        <div class="column">
          <div class="item" v-for="post in blogFeed">
            <FeedThumb
                :img-bg-style="`background-image: url('${post.mainImage.imgSrc}')`"
                :post-author="post.postAuthor"
                :post-id="post.postId"
                :post-publication-date="post.postPublicationDate"
                :post-snippet="post.postSnippet"
                :post-title="post.postTitle"
            />
          </div>
        </div>
      </div>
      <div id="fee" v-else>
        <div class="column">
          <div>
            <h2>Desculpe, ainda não há postagens disponíveis 😳</h2>
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
