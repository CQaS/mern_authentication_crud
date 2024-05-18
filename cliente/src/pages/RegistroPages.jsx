import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

function RegistroPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, esAutentico, err: RegistroErrores } = useAuth();
  const navegar = useNavigate();

  useEffect(() => {
    if (esAutentico) navegar("/tasks");
  }, [esAutentico]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="felx h-[calc(100vh - 100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {RegistroErrores.map((e, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {e}
          </div>
        ))}
        <h1 className="text-3xl font-bold my-2">Registro</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-1 rounded-md"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">Username necesario!</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-1 rounded-md"
            placeholder="email"
          />
          {errors.email && <p className="text-red-500">Email necesario!</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-1 rounded-md"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">Password necesario!</p>
          )}
          <button type="submit"> Registrar</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Ya tienes cuenta?{" "}
          <Link to="/login" className="text-sky-500">
            Ingresar
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegistroPages;
