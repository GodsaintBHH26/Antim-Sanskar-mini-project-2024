import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Shop from "./components/shop"

function App() {
  return (
    <div>
      <div className="bg-green-400 w-full top-0 absolute h-256 z-0">
        <NavBar />
        <div className="mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
