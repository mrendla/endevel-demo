import { defineStore } from 'pinia';
import { api } from '../boot/axios';
import { Tag } from '../components/models';

export const useTagStore = defineStore('tags', {
  state: () => ({
    tags: [] as Tag[] | undefined,
  }),
  actions: {
    async fetchTags() {
      try {
        const response = await api.get('tag/');
        this.tags = response.data;
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    },
  },
});
