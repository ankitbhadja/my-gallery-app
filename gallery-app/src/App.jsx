import { Routes, Route, Navigate } from "react-router-dom";
import Folders from "./pages/Folders";
import Images from "./pages/Images";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Login from "./pages/Login"
import Resume from "./pages/resume";

//? Authentication Check
const isAuthenticated = () => !!localStorage.getItem("token");

//? Private Route Component
const PrivateRoute = ({ children }) => isAuthenticated() ? children : <Navigate to="/login" />;

const App = () => {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/resume" element={<Resume />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Folders />
          </PrivateRoute>
        }
      />
      <Route
        path="/folder/*"
        element={
          <PrivateRoute>
            <Images />
          </PrivateRoute>
        }
      />
    </Routes>
  );

};

export default App;
