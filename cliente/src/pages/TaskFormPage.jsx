import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContex";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

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
        setValue("fecha", dayjs(task.fecha).utc().format("YYYY-MM-DD"));
      }
    }
    loadT();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValida = {
      ...data,
      fecha: data.fecha ? dayjs.utc(data.fecha).format() : dayjs.utc().format(),
    };

    if (param.id) {
      actualizarTasks(param.id, dataValida);
    } else {
      crearTasks(dataValida);
    }
    navegar("/tasks");
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <label htmlFor="titulo">Titulo</label>
        <input
          type="text"
          placeholder="Titulo"
          className="w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2"
          {...register("titulo")}
        />
        <label htmlFor="descripcion">Descripcion</label>
        <textarea
          className="w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2"
          placeholder="descripcion"
          {...register("descripcion")}
        ></textarea>

        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          {...register("fecha")}
          className="w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2"
        />
        <button className="bg-indigo-500 px-3 py-2 rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
