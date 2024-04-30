import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPages from "./pages/LoginPages";
import RegistroPages from "./pages/RegistroPages";
import { AuthProvider } from "./context/AuthContex";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/login" element={<LoginPages />} />
          <Route path="/registro" element={<RegistroPages />} />
          <Route path="/tasks" element={<h1>Lista de task</h1>} />
          <Route path="/agregar-task" element={<h1>Agregar task</h1>} />
          <Route path="/tasks/:id" element={<h1>una task</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
