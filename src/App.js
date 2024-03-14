import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Drinks from './Views/Drinks';
import Inventory from "./Views/Inventory";
import Home from './Views/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="Inventory" element={<Inventory />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
