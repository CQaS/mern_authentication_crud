import { createContext, useContext, useState } from "react";
import { borrarTasksReq, crearTasksReq, getTasksReq } from "../api/tasks";

const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("Error useTask Context");
  }
  return context;
};

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const listarTasks = async () => {
    try {
      const res = await getTasksReq();
      console.log(res);
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const crearTasks = async (task) => {
    console.log(task);
    const res = await crearTasksReq(task);
    console.log(res);
  };

  const borrarTasks = async (id) => {
    try {
      const res = await borrarTasksReq(id);
      console.log(res);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id != id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        crearTasks,
        listarTasks,
        borrarTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
