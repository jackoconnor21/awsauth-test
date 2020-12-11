import { API } from 'aws-amplify'
import { listTodos } from '@/graphql/queries'

export default {
    async getTodos({ commit }) {
        const todosData = await API.graphql({
            query: listTodos,
            authMode: 'AWS_IAM'
        })
        console.log('issue', todosData)
        await commit("SET_TODOS", todosData.data.listTodos.items)
    }
}