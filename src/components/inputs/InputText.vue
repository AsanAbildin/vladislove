<template>
  <div
    class="w-full mb-2"
  >
    <label
      :for="name"
      class="block w-full"
    >
      {{ label }}
    </label>
    <input
      :id="name"
      type="text"
      :value="modelValue"
      class="
        border-b-2 border-black w-full
        focus:border-primary focus:outline-none
      "
      @input="changeHandler($event.target.value)"
    >
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: () => '',
      },
      modelValue: {
        type: String,
        default: () => ''
      }
    },

    emits: ['update:modelValue'],

    methods: {
      changeHandler(val) {
        this.$emit('update:modelValue', val)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>