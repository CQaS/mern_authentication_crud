import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContex";

function Navbar() {
  const { esAutentico, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to="/">
        <h1 className="text-2xl font-bold">Task Admin</h1>
      </Link>
      <ul className="flex gap-x-2">
        {esAutentico ? (
          <>
            <li>Bienvenido {user.username}!!</li>
            <li>
              <Link to="/tasks/nueva">Agregar tareas</Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                Salir
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-sm">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/registro"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                Registro
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
