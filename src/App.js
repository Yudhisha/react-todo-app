import React,{useState} from 'react';
import './App.css'
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

const App = () => {
   const [todo, setTodo] = useState("");
   const [todos, setTodos] = useState([]);
   const [editId, seteditId] = useState(0);

   const handleSubmit=(e)=>{
      e.preventDefault();

      if(editId){
         const editTodo = todos.find((i)=>i.id === editId);
         const updateTodos = todos.map((t)=>
            t.id === editTodo.id ? (t = {id: t.id,todo}) : {id:t.id, todo:t.todo}
         );
         setTodos(updateTodos);
         setTodo('');
         seteditId(0);
         return;

      }

      if(todos !==''){
         setTodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
         setTodo("");
      }
   }

   const handleDelete=(id)=>{
      const delTodo = todos.filter((to)=>to.id !==id);
      setTodos([...delTodo]);
   }

   const handleEdit=(id)=>{
      const editTodo = todos.find((toEdit)=> toEdit.id === id);
         setTodo([editTodo.todo]); 
         seteditId(id);
   }

  return (
    <div className="App">
      <div class="container">
         <h1>Todo List App</h1>
         {/* <form className='todoForm' onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button>{editId ? 'Edit' : 'Go' }</button>
         </form> */}
         <TodoForm handleSubmit={handleSubmit} setTodo={setTodo} todo={todo} editId={editId}/>
         <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>

    </div>
  )
}

export default App