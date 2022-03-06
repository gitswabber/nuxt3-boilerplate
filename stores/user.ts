import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        id: 'tester',
        admin: false
    }),
    getters: {
        getId: (state) => {
            return state.id
        },
        isAdmin: (state) => {
            return state.admin
        }
    },
    actions: {
        changeUser(id) {
            this.id = id
            this.admin = (id === 'admin')
        }
    },
    persist: true
})
