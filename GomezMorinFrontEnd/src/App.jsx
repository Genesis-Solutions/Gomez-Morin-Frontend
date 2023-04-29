import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

const App = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route element={ <Layout /> }>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
