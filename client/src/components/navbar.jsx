import { Link } from "react-router-dom";
import { Button, AppBar, Typography, Toolbar } from "@mui/material";

function NavBar() {
  return (
    <>
      <AppBar className="!bg-transparent !shadow-none !h-16">
        <Toolbar className="flex justify-between">
          <Typography>
            <Link to="/">
              <img
                src="/logo.svg"
                alt="logo-img"
                className="h-16 drop-shadow-sm"
              />
            </Link>
          </Typography>
          <div className="flex gap-2 ">
            <Button
              variant="contained"
              to="/about"
              component={Link}
              className="!bg-transparent !shadow-none  !font-bold hover:!bg-yelSee !text-lg !text-blue-700"
            >
              About Us
            </Button>
            <Button
              variant="contained"
              className="!bg-transparent !shadow-none !font-bold hover:!bg-yelSee !text-lg !text-blue-700"
            >
              Cremation Centers
            </Button>
            <Button
              variant="contained"
              className="!bg-transparent !shadow-none !font-bold hover:!bg-yelSee !text-lg !text-blue-700"
            >
              Rituals/Traditions
            </Button>
            <Button
              variant="contained"
              className="!bg-transparent !shadow-none !font-bold hover:!bg-yelSee !text-lg !text-blue-700"
            >
              Facilities
            </Button>
            <Button
              variant="contained"
              to="/shop"
              component={Link}
              className="!bg-transparent !shadow-none !font-bold hover:!bg-yelSee !text-lg !text-blue-700"
            >
              Shop
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
