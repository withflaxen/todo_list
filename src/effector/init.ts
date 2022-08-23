import {createEffect, createEvent, createStore, restore, Store} from 'effector';

export type Todo = {
    title:string
    id:number
    completed:boolean
}

export const resetCurrentTodo = createEvent()
export const addTodo = createEvent<Todo>()
export const deleteTodo = createEvent<{ id: number }>()
export const setCurrentTodo = createEvent<{title: string }>()
export const fetchTodos = createEvent()
export const setTodosAmountPerFetch = createEvent<{amount:number}>()
export const toggleTodoSelect = createEvent<{id:number}>()

export const fxFetchTodos = createEffect( ({amount, start}:{amount:number,start:number})=>{

   return fetch(`https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${amount}`)
        .then((response) => response.json())
        .then((todos:Todo[]) => todos);
})

export const $todos = createStore<Todo[]>([{id:0,title:'default todo',completed:false}])
export const $todosLength = $todos.map((todos)=>todos.length)
export const $todosAmountPerFetch = restore(setTodosAmountPerFetch,{amount:10})
export const $currentTodo = $todos.map((todos)=>({title:'',id: todos.length, completed:false}))


