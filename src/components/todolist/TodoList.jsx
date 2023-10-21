import React, {useEffect, useState} from 'react'
import './todo.css'
import {AiOutlineDelete} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs'

const TodoList = () => {
    const [isCompleted, setIsCompleted] = useState(false)
    const [allTodos, setAllTodos] = useState([])
    const [newTittle, setTittle] = useState("")
    const [newDescription, setDescription] = useState("")
    
    const handleTodo = () =>{
        let newTodo = {
            tittle: newTittle, 
            description: newDescription
        }

        let updatedtodos = [...allTodos];
        updatedtodos.push(newTodo);
        setAllTodos(updatedtodos);
        localStorage.setItem('Todolist', JSON.stringify(updatedtodos))
    }

    const handleDeleteTodo = (index) =>{
        let reduced = [...allTodos];
        reduced.splice(index);

        localStorage.setItem('Todolist', JSON.stringify(reduced));
        setAllTodos(reduced)
    }

    useEffect(()=>{
        let savedTodo = JSON.parse(localStorage.getItem('Todolist'))
        if(savedTodo){
            setAllTodos(savedTodo)
        }
    }, [])

  return (
    <div>
        <div className="todo-main">
            <h1>Todo List</h1>

            <div className="todo-wrapper">
                <div className="todo-input">
                    <div className="todo-input-item">
                        <label>Tittle</label>
                        <input type="text" value={newTittle} onChange={(e)=> setTittle(e.target.value)} placeholder='whats the task tittle'/>
                    </div>
                    <div className="todo-input-item">
                        <label>Description</label>
                        <input type="text" value={newDescription} onChange={(e)=> setDescription(e.target.value)}placeholder='whats the task tittle'/>
                    </div>
                    <div className="todo-input-item">
                        <button type='button' onClick={handleTodo} className='primaryBtn'>Add</button>
                    </div>
                </div>

                <div className="btn-area">
                    <button className={`secondaryBtn ${isCompleted === false && 'active'}`} onClick={()=> setIsCompleted(false)}>Todo</button>
                    <button className={`secondaryBtn ${isCompleted === true && 'active'}`} onClick={()=> setIsCompleted(true)}>Completed</button>
                </div>
                <div className="todo-list">
                    {allTodos.map((item, index) => {
                        return (
                            <div className="todo-list-item" key={index}>
                                <div>
                                    <h3>{item.tittle}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <AiOutlineDelete className='icons' type='button' onClick={()=>handleDeleteTodo(index)}/>
                                    <BsCheckLg className='check-icon'/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList