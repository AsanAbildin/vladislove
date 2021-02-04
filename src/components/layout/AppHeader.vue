<template>
  <header class="container mx-auto border-black border-b flex items-center py-4 px-4 mb-4">
    <div class="logo-place text-3xl font-bold text-primary">
      vladislove
    </div>
    <div class="ml-auto">
      <button
        class="block"
        @click="showDrawer"
      >
        <span class="w-7 block border-b-2 border-primary mb-2" />
        <span class="w-7 block border -b-2 border-primary mb-2" />
        <span class="w-7 block border-b-2 border-primary" />
      </button>
    </div>
  </header>
  <app-drawer :show="isDrawerShown" />
</template>

<script>
  import AppDrawer from '@/components/layout/AppDrawer.vue'

  export default {
    components: {
      AppDrawer,
    },
    data() {
      return {
        isDrawerShown: false
      }
    },
    methods: {
      showDrawer() {
        this.isDrawerShown = true
      }
    },
  }
</script>

<style>

</style>