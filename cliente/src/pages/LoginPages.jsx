import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { Link } from "react-router-dom";

function LoginPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, err: signinErrores } = useAuth();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    signin(data);
  });

  return (
    <div className="felx h-[calc(100vh - 100px)] items-center justify-center">
      {signinErrores.map((e, i) => (
        <div className="bg-red-500 p-2 text-white text-center" key={i}>
          {e}
        </div>
      ))}
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={onSubmit}>
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
        {errors.password && <p className="text-red-500">Password necesario!</p>}
        <button type="submit">Login</button>
      </form>

      <p className="flex gap-x-2 justify-between">
        Aun no tienes cuenta?{" "}
        <Link to="/registro" className="text-sky-500">
          Reistrate
        </Link>
      </p>
    </div>
  );
}

export default LoginPages;
