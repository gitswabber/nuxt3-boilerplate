/*import {useNuxtApp} from '#app'
let { $axios } = useNuxtApp()
const axios = $axios()*/
// import config from '#config'
import axios from "axios";

const Api = {

    sayHello() {
        axios.get(useRuntimeConfig().api + '/hello')
            .then((response) => {
            console.log()
            console.log(response)
            return response
        })
/*        this.$axi
        return this.$axios({
            method: 'get',
            // url: runtimeConfig.api + '/hello',
            responseType: 'text'
        }).then(function (response) {
            return response
        })*/
    },

    createHelloMessage(msg: String) {
        axios.post(useRuntimeConfig().api + '/hello', msg)
            .then((response) => {
            return response
        })
    }
}

export default Api
