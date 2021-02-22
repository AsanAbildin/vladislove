<template>
  <form
    class="h-full pb-20"
    @submit.prevent="generateHandler"
  >
    <div class="flex flex-wrap space-y-4">
      <h2 class="font-bold mb-1 text-lg w-full">
        Project
      </h2>
      <input-radio
        v-model="form.project"
        :options="formData.projectOptions"
      />
      <h2 class="font-bold mb-1 text-lg w-full">
        Language
      </h2>
      <input-radio
        v-model="form.language"
        :options="formData.languageOptions"
      />
      <h2 class="font-bold text-lg mb-1 w-full">
        Spring Boot
      </h2>
      <input-radio
        v-model="form.boot"
        :options="formData.bootOptions"
      />

      <h2 class="font-bold mb-1 text-lg w-full">
        Project Metadata
      </h2>

      <input-text
        v-model="form.group"
        label="Group"
      />
      <input-text
        v-model="form.artifact"
        label="Atifact"
      />
      <input-text
        v-model="form.name"
        label="Name"
      />
      <input-text
        v-model="form.description"
        label="Description"
      />
      <input-text
        v-model="form.packageName"
        label="Package Name"
      />
      <input-radio
        v-model="form.packaging"
        label="Packaging"
        :options="formData.packagingOptions"
      />
      <input-radio
        v-model="form.java"
        label="Java"
        :options="formData.javaOptions"
      />
    </div>
    <div class="fixed bottom-0 left-0 right-0 py-4 mt-2 bg-gray-200 border-t border-black">
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
import InputText from '@/components/inputs/InputText'
export default {
  name: "Home",
  components: {
    InputRadio,
    InputText
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
        bootOptions: [
          {
            label: '2.5.0',
            value: '2.5.0'
          },
          {
            label: '2.4.4',
            value: '2.4.4'
          },
          {
            label: '2.4.3',
            value: '2.4.3'
          },
          {
            label: '2.3.10',
            value: '2.3.10'
          },
          {
            label: '2.3.9',
            value: '2.3.9'
          },
        ],
        packagingOptions: [
          {
            label: 'Jar',
            value: 'Jar',
          },
          {
            label: 'War',
            value: 'War',
          },
        ],
        javaOptions: [
          {
            label: '15',
            value: '15',
          },
          {
            label: '11',
            value: '11',
          },
          {
            label: '8',
            value: '8',
          },
        ],
      }
    }
  },

  methods: {
    generateHandler() {
      console.log(this.form)
    }
  },
};
</script>
