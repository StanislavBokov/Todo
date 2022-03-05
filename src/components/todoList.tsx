import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchTodo } from "../store/actionCreators/todo";
import { TodoActionTypes } from "../types/todo";


const TodoList:React.FC = () => {
    const {error, loading,todoList} = useTypeSelector(state => state.todo)
   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodo())
    },[])
    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        <h1>{error}</h1>
    }
    const removeTodo = (id:number) => {
        dispatch({type:TodoActionTypes.REMOVE_TODO,payload:id})
    }
    const boxChange = (id:number) => {
        dispatch({type:TodoActionTypes.BOX_CHECKED,payload:id})
    }
    
    return (
        <div className='wrapper-todo'>
            {todoList.map((todo) => (
                <div key={todo.id} className='todo-item'>
                    <div style={{display:'flex'}}>
                        <input id='check' type='checkbox' checked={todo.completed? true:false} style={{marginRight:'10px'}} onChange={()=>boxChange(todo.id)}/>
                        <label htmlFor="check"></label>
                        {todo.completed 
                        ? <i className="bi bi-check2" style={{color:'#2E8B57',fontSize:'25px',marginRight:'5px',marginBottom:'-15px',lineHeight:'0px',marginTop:'2px'}}></i>
                        :  <div className='fakeCheck'></div>
                        }
                            <div style={todo.completed?{textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.title}</div>
                    </div>
                   <i onClick={()=>removeTodo(todo.id)} className="bi bi-trash2"></i>
                </div>
            ))}
        </div>
    )
}
export default TodoList