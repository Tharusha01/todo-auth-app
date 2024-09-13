import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [users, setUsers] = useState([]); // Store all registered users
  const [loggedInUser, setLoggedInUser] = useState(null); // Store the currently logged-in user

  // Register a new user
  const register = (username, password) => {
    const newUser = { username, password };
    setUsers([...users, newUser]);
    setLoggedInUser(newUser);
  };

  // Login user
  const login = (username, password) => {
    const existingUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (existingUser) {
      setLoggedInUser(existingUser);
    } else {
      alert("Invalid username or password!");
    }
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
