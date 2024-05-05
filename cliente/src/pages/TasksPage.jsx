import { useAuth } from "../context/AuthContex";

function TasksPage() {
  const { user } = useAuth();
  console.log(user);
  return <div>TasksPage</div>;
}

export default TasksPage;
