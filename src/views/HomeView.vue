<template>
  <main>
    <v-row>
      <v-col cols="12" md="8">
        <FormView :myForm="myform"></FormView>
      </v-col>
      <v-col cols="12" md="4">
        <div class="ta">
          <v-textarea id="area" variant="filled" label="JSON input" no-resize rows="20"
            :model-value="JSON.stringify(myform, null, 4)">
          </v-textarea>
          <v-btn @click="updateJSON" block color="gray">Atualizar JSON</v-btn>
        </div>
      </v-col>
    </v-row>
  </main>
</template>
  
<script lang="ts">
import FormView from '@/views/FormView.vue'
import { type FormModel } from '@/interfaces/FormModel'
export default {
  data() {
    return {
      myform: this.getJSON() as FormModel
    }
  },
  computed: {
    display() {
      return JSON.stringify(this.myform.fields)
    }
  },
  components: { FormView },
  methods: {
    updateJSON() {
      let textBox = document.getElementById("area") as HTMLTextAreaElement
      this.myform = JSON.parse(textBox.value)
    },
    getJSON() {
      return {
        template: "TemplateXYZ",
        fields: [
          {
            "element": "v-text-field",
            "label": "nome",
            "value": "",
            "type": "text",
            "order": 1,
            "rules": ['required']
          },
          {
            "element": "v-text-field",
            "label": "email",
            "value": "",
            "type": "email",
            "items": "",
            "order": 2,
            "rules": ['required', 'email']
          },
          {
            "element": "v-text-field",
            "label": "senha",
            "value": "",
            "type": "password",
            "items": "",
            "order": 3,
            "rules": ['required']
          },
          {
            "element": "v-select",
            "label": "ativo?",
            "value": "sim",
            "items": ["sim", "nao"],
            "order": 4,
            "rules": ['required']
          }
        ]
      }
    }
  }
}

</script>
  
<style lang="scss" scoped>
.ta {
  width: 600px;
  max-height: 200px;
}
</style>
  