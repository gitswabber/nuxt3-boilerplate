import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        id: 'tester',
        isAdmin: false
    }),
    getters: {
        getId: (state) => {
            return state.id
        }
    },
    actions: {
        changeUser(id) {
            this.id = id
            console.log('User is changed. : ' + id)
        }
    }
})
