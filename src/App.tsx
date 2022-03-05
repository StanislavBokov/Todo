import React from 'react';
import TextField from './components/textField';
import TodoList from './components/todoList';
import NavBar from './components/navBar';



function App() {
  return (
    <>
    <NavBar/>
    <div className="App">
        <TextField/>
        <TodoList/>
    </div>
    
    
    </>
  );
}

export default App;
