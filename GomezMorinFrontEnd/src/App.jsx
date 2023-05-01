import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RequestForm from "./pages/RequestForm";

const App = () => {
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/request-form" element={<RequestForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
