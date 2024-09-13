import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Form, Button } from "react-bootstrap";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      alert("All fields are required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email format");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long");
    } else {
      register(email, password, name);
      setEmail("");
      setPassword("");
      setName("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="registerEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="registerPassword" className="mt-2">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="registerName" className="mt-2">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Register
      </Button>
    </Form>
  );
}

export default Register;
