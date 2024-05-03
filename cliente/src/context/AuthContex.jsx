import {
  Children,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import { registroReq, loginReq } from "../api/auth";

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

  const signin = async (user) => {
    try {
      const res = await loginReq(user);
      console.log(res);
    } catch (E) {
      console.log(E.response);
      if (Array.isArray(E.response.data)) {
        return setErr(E.response.data);
      }
      setErr([E.response.data.msg]);
    }
  };

  useEffect(() => {
    if (err.length > 0) {
      const timer = setTimeout(() => {
        setErr([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [err]);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        esAutentico,
        err,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
