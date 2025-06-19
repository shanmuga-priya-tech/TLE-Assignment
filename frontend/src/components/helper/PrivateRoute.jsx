import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null; // Or a loading spinner

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
