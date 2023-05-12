import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RequestForm from "./pages/RequestForm";
import PageRequest from "./pages/PageRequest";
import RequestAsMoral from "./pages/RequestFormMoral";
import RequestAll from "./pages/RequestAll";
import RequestDetail from "./pages/RequestDetail";
import { useSelector } from "react-redux";
import PersistLogin from "./components/PersistLogin";

const App = () => {
  const rol = useSelector((state) => state.auth.nameRol);
  const accessToken = useSelector((state) => state.auth.accessToken);

  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route path="/" element={<Layout />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              <Route
                path="/request-form"
                element={
                  rol === "Física" && accessToken ? (
                    <RequestForm />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
              <Route
                path="/request"
                element={
                  accessToken ? <PageRequest /> : <Navigate to="/" replace />
                }
              />
              <Route
                path="/request-formMoral"
                element={
                  rol === "Moral" && accessToken ? (
                    <RequestAsMoral />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
              <Route
                path="/requestAll"
                element={
                  rol === "S.P" && accessToken ? (
                    <RequestAll />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
              <Route
                path="/requestDetail/:idForm/:userId"
                element={<RequestDetail />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
