import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const register = (name, email, password) => {
    if (users.find((user) => user.email === email)) {
      return false; // User already exists
    }
    setUsers([...users, { name, email, password }]);
    return true; // Registration successful
  };

  const login = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setLoggedInUser(user);
      return true; // Login successful
    }
    return false; // Invalid credentials
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
