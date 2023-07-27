<template>
  <router-view />
</template>

<script setup lang="ts">
import { useTagStore } from './stores/tag-store';

const tagStore = useTagStore();
tagStore.fetchTags();
</script>
