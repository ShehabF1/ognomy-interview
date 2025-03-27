//seperate API logic into a custom hook
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export type Todos = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export const useTodos = () => {
  const [todos, setTodos] = useState<Todos[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://dummyjson.com/todos');
      const data = await response.json();
      setTodos(data.todos);
    } catch {
      toast.error("Unable to fetch the todo list.");
    }
  };

  const addTodo = async (todoText: string) => {
    //add todo to UI before making any API calls
    //use date as id to ensure unique ID, dummyjson doesn't create unique ids for some reason
    const tempId = Date.now();
    const optimisticTodo: Todos = {
      id: tempId,
      todo: todoText,
      completed: false,
      userId: 5,
    };

    setTodos(prev => [optimisticTodo, ...prev]);

    try {
      const response = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(optimisticTodo),
      });
      const data = await response.json();
      setTodos(prev =>
        prev.map(todo => (todo.id === tempId ? { ...data, id: tempId } : todo))
      );
    } catch {
      toast.error('Failed to add todo. Removing it.');
      //revert back to original todo list without the one that failed to add
      setTodos(prev => prev.filter(todo => todo.id !== tempId));
    }
  };

  const deleteTodo = async (todoToDelete: Todos) => {
    setTodos(prev => prev.filter(todo => todo.id !== todoToDelete.id));
    try {
      await fetch(`https://dummyjson.com/todos/${todoToDelete.id}`, {
        method: 'DELETE',
      });
    } catch {
      toast.error('Failed to delete todo. Restoring it.');
      //revert back to original todo list including the one that failed to be removed
      setTodos(prev => [todoToDelete, ...prev]);
    }
  };
  //custom hook will return callback functions that can be used in any component -> avoid prop drilling
  return { todos, setTodos, addTodo, deleteTodo };
};
