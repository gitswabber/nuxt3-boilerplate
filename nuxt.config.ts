import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    typescript : {
      shim: false
    },
    buildModules: [
        "@pinia/nuxt",
        // '@nuxtjs/composition-api/module'
    ],
    // plugins: ['~/plugins/vuetify.ts']
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify']
    },
    target: "static"
})
