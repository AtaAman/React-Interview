import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  function addTodo() {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  }
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  console.log(todos);

  return (
    <>
      <div>Todo</div>
      <input
        onChange={(e) => setInput(e.target.value)}
        className="bg-black text-white"
        type="text"
        placeholder="add todo"
      />
      <button onClick={addTodo} className="bg-red-400 px-2">
        add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li className="text-black" key={index}>
            {todo}{" "}
            <button
              onClick={() => removeTodo(index)}
              className="bg-red-400 px-2"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
