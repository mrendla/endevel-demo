import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
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

async function getBlogPostDetails(id: string) {
  try {
    const response = await api.get(`blog/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error loading blog post detail:', error);
    return undefined;
  }
}

export { api, getBlogPostList as getBlogPostList, getBlogPostDetails };
