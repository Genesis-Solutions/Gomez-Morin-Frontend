import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RequestForm from "./pages/RequestForm";
import PageRequest from "./pages/PageRequest";
import RequestAsMoral from "./pages/RequestFormMoral";
import RequestAll from "./pages/RequestAll";
import { useSelector } from "react-redux";

const App = () => {
  const rol = localStorage.getItem("nameRol");
  const rol2 = useSelector((state) => state.auth.nameRol);
  const accessToken2 = useSelector((state) => state.auth.accessToken);
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/request-form" element={(rol2 === 'Física'|| rol === 'Física') && (accessToken2 || accessToken) ?  <RequestForm /> : <Navigate to="/" replace />} />
            <Route path="/request" element={(accessToken2 || accessToken) ? <PageRequest /> : <Navigate to="/" replace />} />
            <Route path="/request-formMoral" element={(rol2 === 'Física'|| rol === 'Moral') && (accessToken2 || accessToken) ? <RequestAsMoral /> : <Navigate to="/" replace />} /> 
            <Route path="/requestAll" element={(rol2 === 'Física'|| rol === 'S.P') && (accessToken2 || accessToken) ? <RequestAll /> : <Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
