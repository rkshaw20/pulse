import { createContext, useContext, useState } from "react";
import { getLocalStorage } from "../utils/utils";

const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  // const

  const [user, setUser] = useState(getLocalStorage("user"));

  const [token, setToken] = useState(getLocalStorage("token"));

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
