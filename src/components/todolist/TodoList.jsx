import React, {useState} from 'react'
import './todo.css'
const TodoList = () => {
    const [isCompleted, setIsCompleted] = useState(false)

  return (
    <div>
        <div className="todo-main">
            <h1>Todo List</h1>

            <div className="todo-wrapper">
                <div className="todo-input">
                    <div className="todo-input-item">
                        <label>Tittle</label>
                        <input type="text" placeholder='whats the task tittle'/>
                    </div>
                    <div className="todo-input-item">
                        <label>Description</label>
                        <input type="text" placeholder='whats the task tittle'/>
                    </div>
                    <div className="todo-input-item">
                        <button type='button' className='primaryBtn'>Add</button>
                    </div>
                </div>

                <div className="btn-area">
                    <button className={`secondaryBtn ${isCompleted === false && 'active'}`} onclick={()=> setIsCompleted(false)}>Todo</button>
                    <button className={`secondaryBtn ${isCompleted === true && 'active'}`} onclick={()=> setIsCompleted(true)}>Completed</button>
                </div>
                <div className="todo-list">
                    <div className="todo-list-item">
                        <h3>Task 1</h3>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList