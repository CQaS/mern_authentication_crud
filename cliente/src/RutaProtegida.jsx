import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContex";

const RutaProtegida = () => {
  const { loading, esAutentico } = useAuth();
  console.log(loading, esAutentico);

  if (loading) return <h1>Loading...</h1>;

  if (!loading && !esAutentico) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default RutaProtegida;
