import React, { useEffect, useState } from 'react';
import './todo.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

interface Todo {
  tittle: string;
  description: string;
}

interface CompletedTodo extends Todo {
  completedOn: string;
}

const TodoList2: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [allTodos, setAllTodos] = useState<Todo[]>([]);
  const [newTittle, setTittle] = useState<string>('');
  const [newDescription, setDescription] = useState<string>('');
  const [completedTodos, setCompletedTodos] = useState<CompletedTodo[]>([]);

  const handleTodo = () => {
    let newTodo: Todo = {
      tittle: newTittle,
      description: newDescription,
    };

    let updatedtodos: Todo[] = [...allTodos];
    updatedtodos.push(newTodo);
    setAllTodos(updatedtodos);
    localStorage.setItem('Todolist', JSON.stringify(updatedtodos));
  };

  const handleDeleteTodo = (index: number) => {
    let reduced: Todo[] = [...allTodos];
    reduced.splice(index, 1);

    localStorage.setItem('Todolist', JSON.stringify(reduced));
    setAllTodos(reduced);
  };

  const handleCompletedTods = (index: number) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let completedOn =
      dd + '-' + mm + '-' + yyyy + '-' + ' at ' + h + ':' + m + ':' + s;

    let filteritem: CompletedTodo = {
      ...allTodos[index],
      completedOn: completedOn,
    };

    let updatedCompletedArr: CompletedTodo[] = [...completedTodos];
    updatedCompletedArr.push(filteritem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodolist', JSON.stringify(updatedCompletedArr));
  };

  const handleDeleteCompletedTodo = (index: number) => {
    let reduced: CompletedTodo[] = [...completedTodos];
    reduced.splice(index, 1);

    localStorage.setItem('completedTodolist', JSON.stringify(reduced));
    setCompletedTodos(reduced);
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('Todolist') || '[]');
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodolist') || '[]');
    if (savedTodo) {
      setAllTodos(savedTodo);
    }
    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);
  

  return (
    <div>
      <div className="todo-main">
        <h1>Todo List</h1>

        <div className="todo-wrapper">
          <div className="todo-input">
            <div className="todo-input-item">
              <label>Title</label>
              <input
                type="text"
                value={newTittle}
                onChange={(e) => setTittle(e.target.value)}
                placeholder="What's the task title"
              />
            </div>
            <div className="todo-input-item">
              <label>Description</label>
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What's the task description"
              />
            </div>
            <div className="todo-input-item">
              <button type="button" onClick={handleTodo} className="primaryBtn">
                Add
              </button>
            </div>
          </div>

          <div className="btn-area">
            <button
              className={`secondaryBtn ${isCompleted === false && 'active'}`}
              onClick={() => setIsCompleted(false)}
            >
              Todo
            </button>
            <button
              className={`secondaryBtn ${isCompleted === true && 'active'}`}
              onClick={() => setIsCompleted(true)}
            >
              Completed
            </button>
          </div>
          <div className="todo-list">
            {isCompleted === false &&
              allTodos.map((item, index) => {
                return (
                  <div className="todo-list-item" key={index}>
                    <div>
                      <h3>{item.tittle}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div>
                      <AiOutlineDelete
                        className="icons"
                        onClick={() => handleDeleteTodo(index)}
                      />
                      <BsCheckLg
                        className="check-icon"
                        onClick={() => handleCompletedTods(index)}
                      />
                    </div>
                  </div>
                );
              })}
            {isCompleted === true &&
              completedTodos.map((item, index) => {
                return (
                  <div className="todo-list-item" key={index}>
                    <div>
                      <h3>{item.tittle}</h3>
                      <p>{item.description}</p>
                      <p>
                        <small>
                          <i>Completed on: {item.completedOn}</i>
                        </small>
                      </p>
                    </div>
                    <div>
                      <AiOutlineDelete
                        className="icons"
                        onClick={() => handleDeleteCompletedTodo(index)}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList2;
