import { Route,Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";


function App() {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
