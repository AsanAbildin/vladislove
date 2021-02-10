<template>
  <div class="flex flex-col h-screen">
    <AppHeader class="flex-shrink-0" />
    <div class="flex-grow">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
export default {
  components: {
    AppHeader,
  },
}
</script>

<style>

</style>
