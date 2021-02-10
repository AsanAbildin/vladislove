<template>
  <form class="h-full">
    <div class="flex flex-wrap space-x-4">
      <input-radio
        v-model="form.project"
        label="Project"
        :options="formData.projectOptions"
      />
      <input-radio
        v-model="form.language"
        label="Language"
        :options="formData.languageOptions"
      />
    </div>
    <div class="absolute bottom-0 left-0 w-full py-4 bg-gray-200 border-t border-black">
      <div class="flex space-x-2 justify-center">
        <app-button>
          Generate
        </app-button>
        <app-button>
          Explore
        </app-button>
        <app-button>
          Share
        </app-button>
      </div>
    </div>
  </form>
</template>

<script>
import InputRadio from '@/components/inputs/InputRadio'
export default {
  name: "Home",
  components: {
    InputRadio
  },
  data() {
    return {
      form: {},
      formData: {
        projectOptions: [
          {
            label: 'Maven Project',
            value: 'Maven Project'
          },
          {
            label: 'Gradle Project',
            value: 'Gradle Project'
          }
        ],
        languageOptions: [
          {
            label: 'Java',
            value: 'Java'
          },
          {
            label: 'Kotlin',
            value: 'Kotlin'
          },
          {
            label: 'Groovy',
            value: 'Groovy'
          }
        ],
      }
    }
  },
};
</script>
