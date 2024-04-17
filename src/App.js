import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Drinks from './Views/Drinks';
import Inventory from "./Views/Inventory";
import Home from './Views/Home';
import SignUp from './Views/SignUp';
import LogIn from "./Views/LogIn";
import NotFound from "./Views/NotFound";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="bg-bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="drinks" element={<Drinks />} />
            <Route path="Inventory" element={<Inventory />} />
            <Route path="sign_up" element={<SignUp />} />
            <Route path="log_in" element={<LogIn />} />
            <Route path="*" element={<NotFound />} />

          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
