<script setup lang="ts">
import { Blog } from './models';

defineProps<{
  post: Blog;
}>();
</script>

<template>
  <div class="row q-ml-sm">
    <div>
      <img v-if="post.thumbnail" :src="post.thumbnail" class="blog-thumbnail" />
    </div>
    <div class="q-ml-lg blog-container">
      <div class="text-weight-bold text-h6 q-mb-sm">
        {{ post.title }}
      </div>
      <div>{{ post.detail }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog-thumbnail {
  width: 9rem;
  height: 9rem;
}

.blog-container {
  max-width: calc(100% - 12rem);
}
</style>
