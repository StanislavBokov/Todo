
export interface TodoState {
    todoList:any[],
    loading?:boolean;
    error?:null | string
}
export enum TodoActionTypes {
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_ERROR_TODO = 'FETCH_ERROR_TODO',
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    BOX_CHECKED = 'BOX_CHECKED'
}
interface FetchTodo {
    type:TodoActionTypes.FETCH_TODO
}
interface FetchTodoSuccess{
    type:TodoActionTypes.FETCH_TODO_SUCCESS,
    payload:any[]
}
interface FetchErrorTodo{
    type:TodoActionTypes.FETCH_ERROR_TODO,
    payload:string
}
interface TodoAdd{
    type:TodoActionTypes.ADD_TODO,
    payload:{}
}
interface RemoveTodo {
    type:TodoActionTypes.REMOVE_TODO,
    payload:number
}
interface Checked {
    type:TodoActionTypes.BOX_CHECKED,
    payload:number
}
export type TodoAction = FetchTodo | FetchTodoSuccess | FetchErrorTodo | TodoAdd | RemoveTodo | Checked
