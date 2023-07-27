<script setup lang="ts">
import { useTagStore } from '../stores/tag-store';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Tag } from './models';

const route = useRoute();
const selectedTagId = computed<string | undefined>(
  () => route.params.tagId as string | undefined
);

const tagStore = useTagStore();
const tags = computed<Tag[] | undefined>(() => tagStore.tags);

const isSelected = (tagId: number) => selectedTagId.value === tagId.toString();
const getFilterUrl = (tagId: number) =>
  isSelected(tagId) ? '/' : `/tag/${tagId}`;
</script>

<template>
  <q-list v-if="tags" dense padding class="rounded-borders q-mt-sm">
    <q-item
      v-for="tag in tags"
      :key="tag.id"
      :class="{ selected: isSelected(tag.id) }"
      v-ripple
    >
      <router-link :to="getFilterUrl(tag.id)">
        {{ tag.name }}
      </router-link>
    </q-item>
  </q-list>
</template>

<style scoped lang="scss">
.selected {
  background: $secondary;
}
</style>
