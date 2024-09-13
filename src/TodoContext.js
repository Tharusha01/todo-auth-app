import { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const { user } = useContext(AuthContext); // Get current user

  const addTodo = (title, description) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      completed: false,
      username: user?.username, // Add username to todo
    };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, editTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
