import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 bg-transparent flex w-screen justify-between items-center">
      <Link to="/">
        <img src="./logo.svg" alt="logo" className="h-28 scale-105" />
      </Link>
      <div className="flex gap-5 mr-20">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link>Contact Us</Link>
        <Link to="/shop">Shop</Link>
        <Link>Transport</Link>
      </div>
    </div>
  );
}

export default NavBar;
