import React from "react";
import { Todos } from "../hooks/useTodos";
import { TrashIcon } from "@heroicons/react/24/solid";

type TodoItemProps = {
  todo: Todos;
  onDelete: () => void;
};

const TodoItem = ({ todo, onDelete }: TodoItemProps) => (
    <>
      <span className="flex-1 text-left py-3 pl-3 pr-14">{todo.todo}</span>
      {/* Remove button slide in on hover */}
      <button
        className="absolute top-0 right-[-2px] h-full w-12 bg-red-600
                   flex items-center justify-center rounded-tr-md rounded-br-md
                   transform translate-x-full group-hover:translate-x-0
                   transition-transform duration-300 ease-in-out cursor-pointer"
        onClick={onDelete}
      >
        <TrashIcon className="w-5 h-5 text-white" />
      </button>
    </>
  );  

export default TodoItem;
