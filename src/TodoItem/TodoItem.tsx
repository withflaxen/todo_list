import React, {FC} from 'react';
import {deleteTodo, Todo, toggleTodoSelect} from '../effector/init';

export const TodoItem:FC<Todo> = ({id,title,completed}) => {
    return (
        <div style={{width:'250px',border:'1px solid black', display:'flex',justifyContent:'space-between',marginBottom:'10px'}}>
            <span>{title}</span> <input type="checkbox" checked={completed} onChange ={()=>toggleTodoSelect({id})}/>
            <button onClick={()=>deleteTodo({id})}>Delete todo</button>
        </div>
    );
};

