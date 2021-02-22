<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
  export default {
    
  }
</script>

<style>
.btn {
  @apply border-2 rounded-md border-black py-1 px-3 font-bold uppercase;
  @apply hover:border-primary hover:text-primary;
}
</style>