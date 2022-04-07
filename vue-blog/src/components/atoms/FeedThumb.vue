<script setup>
import ThumbLinkBtn from "../atoms/ThumbLinkBtn.vue"
import blogFeed from "../../mocks/blogFeed.json"
import { onMounted } from "vue"
const post = blogFeed[0]

const { mainImage, postPublicationDate } = post
const imgStyle = `background-image: url('${mainImage.imgSrc}')`

onMounted(() => {
  console.log("a post", post)
})
</script>

<template>
  <div class="thumbbox">
    <div class="img" :style="imgStyle" />
    <div class="column">
      <div>
        <h1>{{ post.postTitle }}</h1>
      </div>
      <div>
        <p>{{ post.postSnippet }}</p>
      </div>
      <div class="thumb-lower-row">
        <div class="row space-between full-width">
          <div>
            <div class="row">
              <div>
                <p>Author: <span class="bold">Pedro Fontes</span></p>
              </div>
              <div class="item">
                <p>Data da publica</p>
              </div>
            </div>
          </div>
          <div>
            <ThumbLinkBtn label="Ler mais" postId="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedThumb",
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
