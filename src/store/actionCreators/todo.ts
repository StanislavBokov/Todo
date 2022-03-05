import axios from "axios"
import { Dispatch } from "react"
import { TodoActionTypes, TodoAction } from "../../types/todo"
export const fetchTodo = () => {
    return async function(dispatch: Dispatch<TodoAction>){
        try {
            dispatch({type:TodoActionTypes.FETCH_TODO})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {params:{_limit:10}})
            dispatch({type:TodoActionTypes.FETCH_TODO_SUCCESS,payload:response.data})
        } catch(e) {
            dispatch({type:TodoActionTypes.FETCH_ERROR_TODO, payload:'Error'})
        }
    }
}