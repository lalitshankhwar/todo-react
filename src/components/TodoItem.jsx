import React, { useState } from "react";
import { useTodo } from "../context/todoContext";

function TodoItem({ item }) {
  const [todoMsg, setTodoMsg] = useState(item.todo);
  const [isEditable, setIsEditable] = useState(false);
  const { removeTodo, toggleComplete, updateTodo } = useTodo();

  const handleEdit = () => {
    if (isEditable) {
      updateTodo(item.id, { ...item, todo: todoMsg });
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  };
  const handleDelete = (id) => {
    removeTodo(id);
  };
  return (
    <div
      className={`mt-2 p-2  rounded-2 flex  ${
        item.completed ? "bg-orange-100" : "bg-white"
      }`}
    >
      <input
        className="accent-orange-500 w-6"
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
      />
      <input
        className={`w-full outline-none mx-2 p-1 rounded border-2 ${
          isEditable ? "border-gray-300" : "border-transparent"
        } ${item.completed ? "bg-orange-100 line-through" : ""}`}
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
      />
      <button
        title={`${isEditable ? "Save" : "Edit"}`}
        className="px-2 bg-indigo-500 rounded-full"
        onClick={handleEdit}
      >
        {isEditable ? "📂" : "✏️"}
      </button>
      <button
        className={`bg-red-500 px-3 ms-1 text-white font-bold text-2xl rounded-full ${
          isEditable ? "opacity-60 cursor-no-drop" : ""
        }`}
        title="Delete"
        disabled={isEditable}
        onClick={() => handleDelete(item.id)}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
