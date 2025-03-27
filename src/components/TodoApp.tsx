import React, { useState, useMemo } from "react";
import { useTodos } from "../hooks/useTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Pagination from "./Pagination";
import { motion } from "framer-motion";

const TodoApp = () => {
  const { todos, addTodo, deleteTodo } = useTodos();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(todos.length / itemsPerPage);

  //memoized to avoid unneccesary recalculations
  const paginatedTodos = useMemo(() => {
    return todos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [todos, currentPage]);

  const handlePageChange = (page: number) => {
    //ensure page is within bounds
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    //drop down animation for parent container
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 w-xl mx-auto bg-white shadow-md rounded-md"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>

      <TodoForm onAdd={(val) => {
        addTodo(val);
        setCurrentPage(1);
      }} />

      <TodoList
        todos={todos}
        paginatedTodos={paginatedTodos}
        onDelete={deleteTodo}
        pageKey={currentPage}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </motion.div>
  );
};

export default TodoApp;
