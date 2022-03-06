import {useUserStore} from "../../stores/user";

const TodoApi = {

    async findTodos() {
        const result = await useFetch(useRuntimeConfig().api + '/todos')
        return result.data
    },

    async addTodo(title) {
        const result = await useFetch(useRuntimeConfig().api + '/todos',
            {
                method: 'POST',
                body: {title: title, by: useUserStore().id}
            })
        return result.data
    },

    async updateTodo(id, title) {
        const result = await useFetch(useRuntimeConfig().api + '/todos',
            {
                method: 'PATCH',
                body: {title: title, by: useUserStore().id}
            })
        return result.data
    },

    async deleteTodo(no) {
        const result = await useFetch(useRuntimeConfig().api + '/todos',
            {
                method: 'DELETE',
                params: {no: no}
            })
        return result.data
    }
}

export default TodoApi
