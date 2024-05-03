import { Children, createContext, useState, useContext } from "react";
import { registroReq } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [esAutentico, setEsAutentico] = useState(false);
  const [err, setErr] = useState([]);

  const signup = async (user) => {
    try {
      console.log(user);
      const res = await registroReq(user);
      console.log(res.data);
      setUser(res.data);
      setEsAutentico(true);
    } catch (E) {
      console.log(E.response);
      setErr(E.response.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        esAutentico,
        err,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
