import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Form, Button } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Both fields are required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email format");
    } else {
      login(email, password);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="loginEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="loginPassword" className="mt-2">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="success" type="submit" className="mt-3">
        Login
      </Button>
    </Form>
  );
}

export default Login;
