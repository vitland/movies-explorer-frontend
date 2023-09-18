import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  return <AuthContext.Provider value={{ user, setUser }}>{props.children}</AuthContext.Provider>;
};
