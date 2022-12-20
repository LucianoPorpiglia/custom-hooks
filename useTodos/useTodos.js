import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialValue = [];


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || initialValue;
}

export const UseTodos = () => {


const [todos, dispatch] = useReducer(todoReducer, initialValue);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) );
      }, [todos])
      
      const handleNewTodo = ( todo ) => {
          const action = {
              type: 'Add Todo',
              payload: todo
          }
  
          dispatch( action );
      }
  
      const handleDeleteTodo = ( id ) => {
          dispatch({
              type: 'Remove Todo',
              payload: id
          });
      }
  
        const handleToggleTodo = ( id ) => {
          dispatch({
              type: 'Toggle Todo',
              payload: id
          });
      }
      return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,
      }
}
