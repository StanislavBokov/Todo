import { TodoAction, TodoState, TodoActionTypes } from "../../types/todo"
import { createAction } from "@reduxjs/toolkit"

const initialState:TodoState = {
    todoList:[],
    loading:false,
    error:null
}

export const todoReducer = (state = initialState, action:TodoAction):TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return {loading:true, error:null, todoList:[]}
        case TodoActionTypes.FETCH_TODO_SUCCESS:
             return {loading:false, error:null, todoList:action.payload}
        case TodoActionTypes.FETCH_ERROR_TODO: {
            return {loading:false, error:action.payload, todoList:[]}
        }
        case TodoActionTypes.ADD_TODO: {
            return {todoList:[...state.todoList,action.payload]}
        }
        case TodoActionTypes.REMOVE_TODO: {
            return {todoList:state.todoList.filter((todo) => todo.id !== action.payload)}
        }
        case TodoActionTypes.BOX_CHECKED: {
            const newArr = [...state.todoList]
            const index = newArr.findIndex((item) => item.id == action.payload)
            newArr[index].completed = !newArr[index].completed
            return {todoList:newArr}
        }
        default:
            return state
    }
}