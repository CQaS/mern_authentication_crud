import { useForm } from "react-hook-form";
import { registroReq } from "../api/auth";

function RegistroPages() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    const res = await registroReq(values);
    console.log(res);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 my-1 rounded-md"
          placeholder="Username"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 my-1 rounded-md"
          placeholder="email"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 my-1 rounded-md"
          placeholder="Password"
        />
        <button type="submit"> Registrar</button>
      </form>
    </div>
  );
}

export default RegistroPages;
