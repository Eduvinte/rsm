import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import ViewData from "./pages/ViewData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path="/data" element={<ViewData></ViewData>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
