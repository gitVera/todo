import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import {createAction, deleteAction, editAction} from './actions';
import {selectAllNotes} from './selectors';


function App() {
  const todos = useSelector(selectAllNotes);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const addTodo = (text) => {
    const id = Date.now();
    dispatch(createAction({text, id}));
    setTodo('')
  }

  const editTodo = (item) => {
    dispatch(editAction(item))
  }
  
  const deleteTodo = (id) => dispatch(deleteAction(id))

  return (
    <div className="App">
      <div className="add-todo">
        <h2>Add todo</h2>
        <input type="text" className="add-todo-input" 
        value={todo} onChange={e => setTodo(e.target.value)}/>
        <button className="add-todo-add" onClick={() => addTodo(todo)}>Add</button>
      </div>
      <div className="todo-list">
        {
          todos && todos.map((item, index) => {
            return (
              <div className="todo-item" key={item.id}>
                <span>{index+1}</span>
                <input type="text" className="change-todo-input" 
                value={item.text} onChange={e => editTodo({text:e.target.value, id: item.id })} />
                <button className="delete-todo" onClick={() => deleteTodo(item.id)}
                >X</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
