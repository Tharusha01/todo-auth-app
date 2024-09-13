import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [users, setUsers] = useState([]); // Store registered users
  const [loggedInUser, setLoggedInUser] = useState(null); // Store the logged-in user

  // Register a new user
  const register = (email, password, name) => {
    const newUser = { email, password, name };
    setUsers([...users, newUser]);
    setLoggedInUser(newUser);
  };

  // Login user
  const login = (email, password) => {
    const existingUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (existingUser) {
      setLoggedInUser(existingUser);
    } else {
      alert("Invalid email or password!");
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
