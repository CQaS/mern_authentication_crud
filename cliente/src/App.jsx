import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/registro" element={<h1>Registro</h1>} />
        <Route path="/tasks" element={<h1>Lista de task</h1>} />
        <Route path="/agregar-task" element={<h1>Agregar task</h1>} />
        <Route path="/tasks/:id" element={<h1>una task</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
