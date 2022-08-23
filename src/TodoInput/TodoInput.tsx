import React, {FC} from 'react';
import {$todosAmountPerFetch, addTodo, fetchTodos, setCurrentTodo, setTodosAmountPerFetch} from '../effector/init';
import {useStore} from 'effector-react';

export const TodoInput:FC<{text:string}> = ({text}) => {
    const {amount} = useStore($todosAmountPerFetch)
    return (
        <div style={{marginBottom:'30px'}}>
            <div style={{display:'flex',justifyContent:'space-between',width:'300px'}}>
                <input type="text" value={text} onChange={(e)=>setCurrentTodo({title:e.target.value})}/>
                <button onClick={()=>{addTodo({id:12,title:text,completed:false})}}>Add new todo</button>
            </div>
            <div style={{display:'flex',justifyContent:'space-between', width:'200px'}}>
                <input style={{width:'30px'}} type="text" value={amount} onChange={(e)=>setTodosAmountPerFetch({amount:Number(e.target.value)})}/>
                <button onClick={()=>fetchTodos()}>Fetch todos</button>
            </div>

        </div>
    );
};

