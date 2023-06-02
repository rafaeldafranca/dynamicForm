<template>
    <v-container>
        <div>
            <h1 class="text-center">{{ myForm.template }} </h1>
            <h2 class="text-center">Formulário dinâmico em Vue3 + VITE + SCSS + Vuetify</h2>
        </div>
        <div class="container__form">
            <v-form ref="form" @submit.prevent="">
                <h2 class="text-center">Formulário</h2>
                <span class="message" v-if="!myForm.fields.length">Sem campos para mostrar</span>

                <component v-for="item, index in myForm.fields" :key="index" :is="item.element" :label="item.label"
                    :type="item.type ?? ''" :items="item.items ?? ''" :modelValue="item.value" @update:modelValue="onChange"
                    @focus="currentIndex = index" :rules="getRules(item)">
                </component>
                <div class="buttons">
                    <v-btn color="primary" class="mt-4" block type="submit" @click="submit()">Enviar</v-btn>
                    <v-btn color="warning" class="mt-4" block @click="reset"> Limpar </v-btn>
                </div>
            </v-form>
            <v-divider vertical></v-divider>
        </div>

    </v-container>
</template>

<script lang="ts">
import { type FieldModel } from '@/interfaces/FormModel'
import type { VForm } from 'vuetify/components'

export default {
    name: "FormView",
    data: () => ({
        currentIndex: 0,
    }),
    props: ['myForm'],
    computed: {
        frm(): VForm {
            return this.$refs.form as VForm
        }
    },
    methods: {

        getRules(item: any) {

            const emailRegex = /\S+@\S+\.\S+/;
            let results: any[] = [];

            if (item.rules.find((f: string) => f === 'required'))
                results.push((v: any) => !!v || 'Campo obrigatório')

            if (item.rules.find((f: string) => f === 'email'))
                results.push((v: any) => v.length > 1 && emailRegex.test(v) || 'E-mail inválido')

            return results
        },

        onChange(newval: string) {
            const field = this.myForm.fields.at(this.currentIndex) as FieldModel
            field.value = newval;
        },

        async submit() {
            if (this.frm.isValid) {
                alert(JSON.stringify(this.myForm.fields))
            }
        },

        reset() {
            let fields = this.myForm.fields as FieldModel[]
            fields.forEach((item: FieldModel) => item.value = "")
            this.frm.resetValidation()
            this.frm.reset()
        }
    }
}
</script>

<style lang="scss" scoped>
.container__form {
    display: flex;
    justify-content: space-around;
    padding: 1rem;

    .buttons {
        padding: 1rem;
    }
}

.v-text-field {
    width: 400px;
    margin-right: 1rem;
}
</style>