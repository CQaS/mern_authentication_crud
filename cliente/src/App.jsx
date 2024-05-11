import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPages from "./pages/LoginPages";
import RegistroPages from "./pages/RegistroPages";
import { AuthProvider } from "./context/AuthContex";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import RutaProtegida from "./RutaProtegida";
import { TasksProvider } from "./context/TasksContex";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPages />} />
              <Route path="/registro" element={<RegistroPages />} />

              {/* Rutas protegidas */}
              <Route element={<RutaProtegida />}>
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/tasks/nueva" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  );
};

export default App;
