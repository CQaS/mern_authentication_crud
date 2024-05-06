import { createContext, useContext, useState } from "react";
import { crearTasksReq } from "../api/tasks";

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

  const crearTasks = async (task) => {
    console.log(task);
    const res = await crearTasksReq(task);
    console.log(res);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        crearTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
