<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="page-container">
        <router-link to="/">
          <q-toolbar-title>
            Endevel Blog, the most lorem ipsum blog on the internet!
          </q-toolbar-title>
        </router-link>
      </q-toolbar>
    </q-header>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.page-container {
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
