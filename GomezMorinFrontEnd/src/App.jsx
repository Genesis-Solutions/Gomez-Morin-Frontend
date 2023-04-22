import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./pages/page";
import Page2 from "./pages/page2";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Page />} />
            <Route path="/Prueba2" element={<Page2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
