import {
    $todos,
    $currentTodo,
    resetCurrentTodo,
    deleteTodo,
    addTodo,
    setCurrentTodo,
    fxFetchTodos,
    $todosLength, fetchTodos, $todosAmountPerFetch, toggleTodoSelect
} from './init';
import {combine, sample} from 'effector';

$currentTodo.reset(resetCurrentTodo).on(setCurrentTodo,(currentTodo, {title})=>({
    ...currentTodo, title
}))

$todos.on(deleteTodo,(todos, {id})=>todos.filter((todo)=>todo.id !== id))
$todos.on(addTodo,(todos,newTodo)=>[...todos,newTodo])
$todos.on(fxFetchTodos.doneData,(todos,fetchedTodos)=>[...todos,...fetchedTodos])
$todos.on(toggleTodoSelect,(todos,{id})=>
    todos.map(todo=>({...todo,completed:todo.id===id?!todo.completed:todo.completed}))
)

sample({
    source:combine($todosLength,$todosAmountPerFetch,(start, {amount})=>({start,amount})),
    clock: fetchTodos,
    // fn: () => {}, ???
    target:fxFetchTodos
})