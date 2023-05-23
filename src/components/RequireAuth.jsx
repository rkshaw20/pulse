import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContextProvider";

export const RequireAuth = ({ children }) => {

  const { user } = useAuthContext();

  const location =useLocation()
  if (!user) {
    return <Navigate to="/login" state={{path:location.pathname}}/>;
  }
  return children;
};