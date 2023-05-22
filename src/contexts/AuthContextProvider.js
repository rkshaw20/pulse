import { createContext, useContext, useState } from "react";
import { getLocalStorage } from "../utils/utils";
import { localStorageKeys } from "../constant";

const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const userLocalStorage = getLocalStorage(localStorageKeys.User);
  const [user, setUser] = useState(userLocalStorage);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
