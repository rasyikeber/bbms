import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";  

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      // Decode token if needed (optional)
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded Token:", decoded);
      } catch (error) {
        console.error("Invalid token", error);
        logout();
      }
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await axios.post("/api/auth/login", { email, password });

      // Save the access_token to localStorage
      console.log("Data from backend:", res);
      console.log("User data to be set:", res.data.user);

      // Store both user data and token
      setUser(res.data.user); // Set the full user object
      setToken(res.data.access_token);
      localStorage.setItem("token", res.data.access_token);

    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
