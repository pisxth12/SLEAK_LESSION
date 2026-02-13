// AuthProvider.jsx
import { createContext, useEffect, useState } from "react";
import { login as loginService } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // store user info
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true); // controls Login button
  const [error, setError] = useState(null);

  // On mount, check if token exists and restore user
  useEffect(() => {
    if (token) {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      setUser(savedUser || { username: "guest" });
    }
    setLoading(false);
  }, [token]);

  // Login function
  const signIn = async (credentials) => {
    setLoading(true); // start loading when login starts
    setError(null);
    try {
      const response = await loginService(credentials); // call API
      const data = response.data;

      console.log("Login response:", data);

      if (data.token) {
        setToken(data.token);
        setUser({ username: credentials.username }); // FakeStore only returns token
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({ username: credentials.username })
        );
      } else {
        setError("Invalid login response");
      }
    } catch (err) {
      console.log(err);
      setError("Login failed");
    } finally {
      setLoading(false); // stop loading
    }
  };

  // Logout function
  const signOut = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, error, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
