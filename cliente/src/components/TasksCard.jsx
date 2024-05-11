function TasksCard({ T }) {
  console.log(T);
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{T.titulo}</h1>
        <div className="flex gap-x-2 items-center">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </header>
      <p>{T.descripcion}</p>
      <p>{new Date(T.fecha).toLocaleDateString()}</p>
      <hr />
    </div>
  );
}

export default TasksCard;
