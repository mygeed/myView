<template>
  <section class="layout">
    <header class="layout__header">
      MyView
    </header>
    <section class="layout__container">
      <aside class="layout_sidebar">
        <router-link v-for="item in sidebar" :key="item.path" :to="item.path">
          {{ item.title }}
        </router-link>
      </aside>
      <main class="content">
        <router-view />
      </main>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const components: Array<any> = require('@/components/index.json');
const sidebar = Object.values(components).map(item => {
  return {
    path: `/components/${item.name}`,
    title: item.title,
  };
});
export default defineComponent({
  name: 'Layout',
  setup() {
    return {
      sidebar,
    };
  },
});
</script>
