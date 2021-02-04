<template>
  <div
    v-show="show"
    class="fixed w-full h-full bg-primary top-0 left-0"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
    },
  }
</script>

<style>

</style>