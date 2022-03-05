import {defineNuxtPlugin} from '#app'
import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.provide('axios',
        {
            provide: {
                axios: () => {
                    return axios.create({/* configuration here */})
                }
            }
        }
    )
})

/*
export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
}
*/
