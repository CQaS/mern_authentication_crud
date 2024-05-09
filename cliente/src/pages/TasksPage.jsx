import { useEffect } from "react";
import { useAuth } from "../context/AuthContex";
import { useTasks } from "../context/TasksContex";

function TasksPage() {
  const { listarTasks, tasks } = useTasks();

  useEffect(() => {
    listarTasks();
  }, []);

  if (tasks.length === 0) return <h1>No Tareas</h1>;

  return (
    <div>
      {tasks.map((T) => (
        <div key={T._id}>
          <h1>{T.titulo}</h1>
          <p>{T.descripcion}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default TasksPage;
