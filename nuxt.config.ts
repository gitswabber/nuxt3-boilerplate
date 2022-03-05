import {defineNuxtConfig} from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // https://github.com/nuxt/framework/discussions/1183
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css'
    ],
    build: {
        transpile: ['vuetify']
    },
    ssr: false,
    vite: {
        define: {
            'process.env.DEBUG': 'false',
        }
    },

    buildModules: [
        '@pinia/nuxt',
    ],

    modules: [
        // https://github.com/nuxt-community/axios-module/issues/536
        ['@nuxtjs/axios', {proxyHeaders: false}],
    ],

    publicRuntimeConfig: {
        env: process.env.ENV,
        api: process.env.API,
        description: 'This is nuxt app.'
    },
    privateRuntimeConfig: {
        token: process.env.TOKEN
    }
})
