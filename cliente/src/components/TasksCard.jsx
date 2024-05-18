import { useTasks } from "../context/TasksContex";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TasksCard({ T }) {
  const { borrarTasks } = useTasks();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{T.titulo}</h1>
        <div className="flex gap-x-2 items-center">
          <Link
            to={`/tasks/${T._id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Edit
          </Link>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              borrarTasks(T._id);
            }}
          >
            Delete
          </button>
        </div>
      </header>
      <p>{T.descripcion}</p>
      <p>{dayjs(T.fecha).utc().format("DD/MM/YYYY")}</p>
      <hr />
    </div>
  );
}

export default TasksCard;
