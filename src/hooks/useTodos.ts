import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export type Todos = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

// Track the toast globally to prevent duplication
let fetchErrorToastId: string | number | null = null;

export const useTodos = () => {
  const [todos, setTodos] = useState<Todos[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://dummyjson.com/todo');
      const data = await response.json();
      setTodos(data.todos);
    } catch {
        if (!fetchErrorToastId || !toast.isActive(fetchErrorToastId)) {
            fetchErrorToastId = toast.error("Unable to fetch the todo list.");
      }
    }
  };

  const addTodo = async (todoText: string) => {
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
      setTodos(prev => prev.filter(todo => todo.id !== tempId));
    }
  };

  const deleteTodo = async (todoToDelete: Todos) => {
    // Optimistically remove
    setTodos(prev => prev.filter(todo => todo.id !== todoToDelete.id));
  
    try {
      const response = await fetch(`https://dummyjson.com/todo/${todoToDelete.id}`, {
        method: 'DELETE',
      });
  
      // Force error handling on bad HTTP status (like 404)
      if (!response.ok) {
        throw new Error(`Failed with status ${response.status}`);
      }
    } catch {
      toast.error('Failed to delete todo. Restoring it.');
      setTodos(prev => [todoToDelete, ...prev]);
    }
  };  

  return { todos, setTodos, addTodo, deleteTodo };
};
