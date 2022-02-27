import { defineNuxtPlugin } from "#app";
import { createVuetify } from 'vuetify'
import * as Components from 'vuetify/components'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(createVuetify({
        components: Components
    }))
})
