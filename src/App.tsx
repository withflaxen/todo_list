import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useStore} from 'effector-react';
import {$currentTodo, $todos} from './effector/init';
import {TodoItem} from './TodoItem/TodoItem';
import {TodoInput} from './TodoInput/TodoInput';
import './effector/model'

function App() {
  const todos = useStore($todos)
  const currentTodo = useStore($currentTodo)
  return (
    <div className="App" style={{padding:'50px'}}>
      <TodoInput text={currentTodo.title}/>
      {todos.map(({id,title,completed})=><TodoItem id={id} title={title} completed={completed}/>)}
    </div>
  );
}

export default App;
