<script setup>
import ThumbLinkBtn from "../atoms/ThumbLinkBtn.vue"

</script>

<template>
  <div class="thumbbox">
    <div class="img" :style="imgBgStyle" />
    <div class="column">
      <div>
        <h1>{{ postTitle }}</h1>
      </div>
      <div>
        <p>{{ postSnippet }}</p>
      </div>
      <div class="thumb-lower-row">
        <div class="row space-between full-width">
          <div>
            <div class="column">
              <div>
                <p>Author: <span class="bold">{{ postAuthor }}</span></p>
              </div>
              <div>
                <p>Data da publicação <span class="bold">{{ postPublicationDate }}</span></p>
              </div>
            </div>
          </div>
          <div>
            <ThumbLinkBtn label="Ler mais" :postId="postId" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedThumb",
  props: [
      "postTitle",
      "postSnippet",
      "postAuthor",
      "postPublicationDate",
      "postId",
      "imgBgStyle"
  ]
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 15rem;
  background: transparent no-repeat center;
  background-size: cover;
}

.thumbbox {
  padding: 0.4rem;
  width: 100%;
}

.thumb-lower-row {
  margin-top: 1rem;
}
</style>
