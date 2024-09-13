import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      register(username, password);
      setUsername("");
      setPassword("");
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
