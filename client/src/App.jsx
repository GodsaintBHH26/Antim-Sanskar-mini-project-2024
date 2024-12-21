import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Login from "./pages/login";
import Rituals from "./pages/rituals";
import SignUp from "./pages/signup";
import Cremation from "./pages/cremation";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login/>} />
          <Route path='/rituals' element={<Rituals/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/cremation" element={<Cremation/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
