import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="fixed top-0 left-0">
        <Link to='/'><img src="./logo.svg" alt="logo" className="h-28 scale-105 " /></Link>
      
    </div>
  );
}

export default NavBar;
