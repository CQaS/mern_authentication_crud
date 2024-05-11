import { useEffect } from "react";
import { useAuth } from "../context/AuthContex";
import { useTasks } from "../context/TasksContex";
import TasksCard from "../components/TasksCard";

function TasksPage() {
  const { listarTasks, tasks } = useTasks();

  useEffect(() => {
    listarTasks();
  }, []);

  if (tasks.length === 0) return <h1>No Tareas</h1>;

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TasksCard T={task} key={task._id} />
      ))}
    </div>
  );
}

export default TasksPage;
