<template>
    <v-container>
        <h1>Formulário {{ myForm.template}} dinâmico em Vue3 + VITE + SCSS + Vuetify</h1>

        <div class="d-flex justify-center">
            <v-form @submit.prevent="">
                <h2 class="text-center">Formulário</h2>
                <span class="message" v-if="!myForm.fields.items.length">Sem campos para mostrar</span>

                <component v-for="item, index in myForm.fields.items" :key="index" :is="item.element" :label="item.label"
                    :type="item.type ?? ''" :items="item.items ?? ''" :modelValue="item.value" @update:modelValue="onChange"
                    @focus="currentIndex = index">
                </component>
                <div>
                    <v-btn class="ma-md-4" type="submit" @click="submitForm()">Enviar</v-btn>
                </div>
            </v-form>
            <v-divider vertical></v-divider>
        </div>

    </v-container>
</template>

<script lang="ts">

export default {
    name: "FormView",
    data() {
        return {
            currentIndex: 0 
        }
    },
    props: ['myForm'],
    methods: {
        onChange(newval: any) {
            var item = this.myForm.fields.items.at(this.currentIndex) as any
            item.value = newval;
        },
        submitForm() {
            alert(JSON.stringify(this.myForm.fields.items))
        }
    }
}
</script>

<style scoped>
.v-text-field {
    width: 400px;
    margin-right: 1rem;
}
</style>