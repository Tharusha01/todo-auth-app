import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

function TodoList() {
  const { todos, addTodo, deleteTodo, toggleComplete } =
    useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>
              <strong>Added by:</strong> {todo.username}
            </p>{" "}
            {/* Display username */}
            <button onClick={() => toggleComplete(todo.id)}>
              {todo.completed ? "Unmark" : "Mark"} Completed
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
