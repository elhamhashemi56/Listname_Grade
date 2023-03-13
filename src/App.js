import { useState } from 'react';
import './App.css';
import TodoList from './component/TodoList';
import ViewList from './component/ViewList';

function App() {

  const [todo,setTodo]=useState([])
  return (
    <div className="main_container">
     <TodoList todo={todo} setTodo={setTodo}/>
     <span className="line"></span>
     <ViewList todo={todo} />
    </div>
  );
}

export default App;
