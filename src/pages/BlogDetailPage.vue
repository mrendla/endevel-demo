<script setup lang="ts">
import { computed } from 'vue';
import { useRequest } from 'vue-request';
import { useRoute } from 'vue-router';
import { getBlogPostDetails } from '../boot/axios';
import { useBlogPostTags } from '../composables/useBlogPostTags';

const route = useRoute();

const id = computed<string>(() => route.params.id as string);

const { data: blogPost } = useRequest(() => getBlogPostDetails(id.value), {
  cacheKey: `blogdetail${id.value}`,
  refreshDeps: [id],
});
const { blogPostTags } = useBlogPostTags(blogPost);
</script>

<template>
  <div v-if="blogPost" class="q-my-lg">
    <div class="text-weight-bold text-h6 q-mb-md">
      {{ blogPost.title }}
    </div>
    <img v-if="blogPost.image" :src="blogPost.image" class="blog-image" />
    <div class="q-mb-md">{{ blogPost.text }}</div>
    <router-link
      v-for="tag in blogPostTags"
      :key="tag.id"
      :to="`/tag/${tag.id}`"
    >
      <q-chip color="secondary" text-color="white">
        {{ tag.name }}
      </q-chip>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.blog-image {
  max-width: 100%;
}
</style>
