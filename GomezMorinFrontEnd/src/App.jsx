import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./pages/Register"
import Login from "./pages/Login"

const App = () => {
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/register" element={<Register  />} />
			<Route path="/login" element={<Login  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
