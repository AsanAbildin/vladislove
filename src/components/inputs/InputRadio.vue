<template>
  <div class="w-full">
    <div
      v-if="label"
      class="mb-1"
    >
      {{ label }}
    </div>
    <div
      v-if="options"
      class="flex flex-wrap"
    >
      <label
        v-for="option in options"
        :key="`option-${option.label}`"
        class="flex items-center mr-4 mb-2"
      >
        <input
          class="w-0 h-0"
          type="radio"
          :value="option.value"
          :checked="option.value === modelValue"
          @change="changeHandler(option.value)"
        >
        <span
          class="h-5 w-5 inline-block rounded-full border-2 border-primary transition duration-200"
          :class="{'active bg-primary border-black': option.value === modelValue}"
        />
        <span class="ml-2">
          {{ option.label }}
        </span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Array,
        default: null,
        required: true,
      },
      label: {
        type: String,
        default: null
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

<style>

</style>