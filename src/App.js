import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Register from "./Register";
import Login from "./Login";
import { TodoProvider } from "./TodoContext";
import TodoList from "./TodoList";

function App() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <div className="App">
      <h1>Todo App with Authentication</h1>
      {loggedInUser ? (
        <TodoProvider>
          <div>
            <h2>Welcome, {loggedInUser.username}</h2>
            <button onClick={logout}>Logout</button>
            <TodoList />
          </div>
        </TodoProvider>
      ) : (
        <div>
          <Register />
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
