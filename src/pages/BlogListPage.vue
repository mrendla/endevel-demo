<script setup lang="ts">
import { getBlogPostList } from '../boot/axios';
import { computed, ref, watch } from 'vue';
import { useRequest } from 'vue-request';
import { useRoute } from 'vue-router';
import { useBlogPageCount } from '../composables/useBlogPageCount';
import { usePageBlogPosts } from '../composables/usePageBlogPosts';
import TagSidebar from '../components/TagSidebar.vue';
import BlogPost from '../components/BlogPost.vue';

const page = ref<number>(1);

const route = useRoute();
const tagId = computed<string | undefined>(
  () => route.params.tagId as string | undefined
);
const { data: blogPosts } = useRequest(() => getBlogPostList(tagId.value), {
  cacheKey: `blog${tagId.value ?? ''}`,
  refreshDeps: [tagId],
});
const { blogPageCount } = useBlogPageCount(blogPosts);
const { paginatedBlogPosts } = usePageBlogPosts(page, blogPosts);

// Reset the pagination when the filter is changed
watch(tagId, () => (page.value = 1));
</script>

<template>
  <div v-if="blogPosts">
    <div class="page-container row">
      <div class="col">
        <div v-for="post in paginatedBlogPosts" :key="post.id" class="q-mt-md">
          <router-link :to="`/post/${post.id}`">
            <BlogPost :post="post" />
          </router-link>
        </div>
        <div v-if="blogPageCount && blogPageCount > 1">
          <hr />
          <q-pagination
            v-model="page"
            :max="blogPageCount"
            direction-links
            unelevated
            flat
            active-color="purple"
            class="q-mt-sm"
          />
        </div>
      </div>
      <div class="col sidebar">
        <TagSidebar />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  max-width: 10rem;
  @media screen and (max-width: 50em) {
    display: none;
  }
}
</style>
