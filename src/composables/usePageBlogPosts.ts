import { computed, Ref } from 'vue';
import { Blog } from '../components/models';
import { pageSize } from '../constants';

export function usePageBlogPosts(
  page: Ref<number>,
  blogPosts: Ref<Blog[] | undefined>
) {
  const paginatedBlogPosts = computed<Blog[] | undefined>(() => {
    if (!blogPosts.value || !page.value) {
      return undefined;
    }

    const blogPostsToSkip = (page.value - 1) * pageSize;
    return blogPosts.value.slice(blogPostsToSkip, blogPostsToSkip + pageSize);
  });

  return {
    paginatedBlogPosts,
  };
}
