import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContex";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { crearTasks } = useTasks();

  const onSubmit = handleSubmit((data) => {
    crearTasks(data);
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          className="w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2"
          {...register("titulo")}
        />
        <textarea
          className="w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2"
          placeholder="descripcion"
          {...register("descripcion")}
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
