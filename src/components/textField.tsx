import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { TodoActionTypes } from "../types/todo";

interface Task {
    title:string,
    id:number,
    completed:boolean
}

const TextField:React.FC = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('')
    const todoTask:Task = {
        title:value,
        id:Date.now(),
        completed:false
    }
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value)
    }
   
    const keyAddTodo = (event:React.KeyboardEvent) => {
        if(value) {
            if(event.key === 'Enter') {
                dispatch({type:TodoActionTypes.ADD_TODO,payload:todoTask})
                setValue('')  
            }
        }   
    }
    return (
        <input type="text" placeholder='Введите название дела' value={value} onChange={handleChange} onKeyUp={keyAddTodo}/>
    )
}
export default TextField