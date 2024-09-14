import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
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
    <Router>
      <Container className="mt-5">
        <div className="container">
          <h1 className="text-center mt-0 mb-4">
            Todo App with Authentication
          </h1>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              loggedInUser ? (
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
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

function LoginPage() {
  return (
    <div className="text-center">
      <h2>Login</h2>
      <Login />
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

function RegisterPage() {
  return (
    <div className="text-center">
      <h2>Register</h2>
      <Register />
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default App;
