import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./pages/Register"

const App = () => {
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Register />} />
            <Route path="/Register" element={<Register  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
