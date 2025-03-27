import React, { useState } from "react";

type TodoFormProps = {
  onAdd: (text: string) => void;
};

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    
    onAdd(inputVal);
    setInputVal("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4 gap-4">
      <input
        type="text"
        placeholder="Enter a new todo..."
        className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button
        type="submit"
        className="cursor-pointer py-2 px-8 font-semibold bg-green-700 text-white rounded-md hover:bg-green-900 transition-colors duration-300 ease-in-out"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
