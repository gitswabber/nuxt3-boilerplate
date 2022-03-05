import {defineNuxtConfig} from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // https://github.com/nuxt/framework/discussions/1183
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify']
    },
    ssr: false,
    buildModules: [
        '@pinia/nuxt',
    ],
    vite: {
        define: {
            'process.env.DEBUG': 'false',
        }
    },
    publicRuntimeConfig: {
        env: process.env.ENV,
        api: process.env.API,
        description: 'This is nuxt app.'
    },
    privateRuntimeConfig: {
        token: process.env.TOKEN
    }
})
