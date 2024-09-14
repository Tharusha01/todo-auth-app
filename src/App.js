import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { TodoProvider } from "./TodoContext";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Register from "./Register";
import Login from "./Login";
import { Container, Button } from "react-bootstrap";

function App() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Todo App with Authentication</h1>
      {loggedInUser ? (
        <TodoProvider>
          <div className="text-center">
            <h2>Welcome, {loggedInUser.name}</h2>
            <Button variant="danger" onClick={logout} className="mb-3">
              Logout
            </Button>
            <TodoForm />
            <TodoList />
          </div>
        </TodoProvider>
      ) : (
        <div className="text-center">
          <Register />
          <Login />
        </div>
      )}
    </Container>
  );
}

export default App;
