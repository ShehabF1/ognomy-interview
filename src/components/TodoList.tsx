import React from "react";
import { Todos } from "../hooks/useTodos";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";

type TodoListProps = {
  todos: Todos[];
  paginatedTodos: Todos[];
  onDelete: (todo: Todos) => void;
  pageKey: number;
};

// framer motion animation definitions for staggered slide down effect
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

const TodoList = ({ todos, paginatedTodos, onDelete, pageKey }: TodoListProps) => {
  if (todos.length === 0) {
    return <p className="text-gray-500">Your todo list is empty</p>;
  }

  return (
    <motion.ul
      key={pageKey} // triggers animation when page changes
      className="flex flex-col divide-y divide-gray-200 gap-2 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Only output todos beloning to the page */}
      {paginatedTodos.map((todo) => (
        <motion.li 
            className="group relative flex items-stretch border rounded-md shadow-sm overflow-hidden" 
            key={todo.id} 
            variants={itemVariants}
        >
          <TodoItem todo={todo} onDelete={() => onDelete(todo)} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default TodoList;
