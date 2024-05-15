import { useTasks } from "../context/TasksContex";

function TasksCard({ T }) {
  const { borrarTasks } = useTasks();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{T.titulo}</h1>
        <div className="flex gap-x-2 items-center">
          <button>Edit</button>
          <button
            onClick={() => {
              borrarTasks(T._id);
            }}
          >
            Delete
          </button>
        </div>
      </header>
      <p>{T.descripcion}</p>
      <p>{new Date(T.fecha).toLocaleDateString()}</p>
      <hr />
    </div>
  );
}

export default TasksCard;
