import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const api = axios.create({ baseURL: 'https://endevel-task.doc.endevel.cz' });

async function getBlogPostList(tagId: string | undefined) {
  try {
    const url = tagId ? `blog/?tags=${tagId}` : 'blog/';
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return undefined;
  }
}

async function getBlogPostDetails(id: string | undefined) {
  if (!id) return undefined;
  try {
    const response = await api.get(`blog/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error loading blog post detail:', error);
    return undefined;
  }
}

export { api, getBlogPostList as getBlogPostList, getBlogPostDetails };
