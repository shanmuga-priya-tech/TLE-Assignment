import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token in AuthContext:", token);

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded);
        setUser(decoded);
      } catch (e) {
        console.error("Invalid token:", e);
        localStorage.removeItem("token");
        setUser(null);
      }
    } else {
      setUser(null);
    }

    setLoading(false); // ✅ must set this to stop 'loading'
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
