import React from 'react'

const TodoList = ({todos,handleEdit,handleDelete}) => {
  return (
    <div>
        <ul className='allTodo'>
            {
               todos.map((t)=>{
                  return(
                     <li className='singleTodo'>
                     <span className='todoText' key={t.id}>{t.todo}</span>
                     <button onClick={()=>handleEdit(t.id)}>Edit</button>
                     <button onClick={()=>handleDelete(t.id)}>Delete</button>
                  </li>
                  )
               })
            }
         </ul>
    </div>
  )
}

export default TodoList