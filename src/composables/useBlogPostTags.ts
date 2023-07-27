import { computed, Ref } from 'vue';
import { useTagStore } from '../stores/tag-store';
import { BlogDetail, Tag } from '../components/models';

export function useBlogPostTags(blogPost: Ref<BlogDetail>) {
  const tagStore = useTagStore();

  const filteredBlogTags = computed<Tag[]>(() => {
    if (!blogPost.value ?? !tagStore.tags) {
      return [];
    }

    const blogPostTagsIds = blogPost.value.tags;
    const tagIdsSet = new Set(blogPostTagsIds);
    return tagStore.tags.filter((tag) => tagIdsSet.has(tag.id));
  });

  return {
    blogPostTags: filteredBlogTags,
  };
}
