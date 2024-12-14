import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
