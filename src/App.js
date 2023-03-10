import './App.css';
import TodoList from './component/TodoList';
import ViewList from './component/ViewList';

function App() {
  return (
    <div className="main_container">
     <TodoList />
     <span className="line"></span>
     <ViewList />
    </div>
  );
}

export default App;
