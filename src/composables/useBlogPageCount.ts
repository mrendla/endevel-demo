import { computed, Ref } from 'vue';
import { Blog } from '../components/models';
import { pageSize } from '../constants';

export function useBlogPageCount(blogPosts: Ref<Blog[] | undefined>) {
  const blogPageCount = computed<number | undefined>(() => {
    if (!blogPosts.value) {
      return 0;
    }

    return Math.ceil(blogPosts.value.length / pageSize);
  });

  return {
    blogPageCount,
  };
}
