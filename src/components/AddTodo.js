import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="flex justify-center items-center h-20">
      <form onSubmit={addTodoHandler} className="flex items-center space-x-3">
        <input
          type="text"
          className="bg-indigo-100 rounded border border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500 text-base text-indigo-800 py-2 px-4 leading-5 transition-colors duration-200 ease-in-out w-60"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
