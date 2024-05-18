import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContex";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { crearTasks, getTask, actualizarTasks } = useTasks();
  const navegar = useNavigate();
  const param = useParams();

  useEffect(() => {
    async function loadT() {
      if (param.id) {
        const task = await getTask(param.id);
        console.log(task);
        setValue("titulo", task.titulo);
        setValue("descripcion", task.descripcion);
      }
    }
    loadT();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (param.id) {
      actualizarTasks(param.id, data);
    } else {
      crearTasks(data);
    }
    navegar("/tasks");
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
