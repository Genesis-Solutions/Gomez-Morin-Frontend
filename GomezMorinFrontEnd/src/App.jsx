import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./pages/page"
import Layout from "./components/Layout";


function App() {
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route element={ <Layout /> }>
            <Route path="/" element={ <Page /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App