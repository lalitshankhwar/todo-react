import React, { useState } from "react";
import { useTodo } from "../context/todoContext";

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("");
  const { addTodo } = useTodo();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoMsg) return;
    addTodo({ todo: todoMsg });
    setTodoMsg("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex mb-5">
      <input
        className="outline-none p-2 w-full rounded-l border-2 border-white focus:border-orange-500/75"
        type="text"
        placeholder="What do you want to add?"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button className="bg-orange-500 py-2 px-3 text-white font-bold rounded-r border-2 border-orange-500 active:scale-90 duration-100">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
