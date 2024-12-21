import { Link } from "react-router-dom";
import {
  Button,
  AppBar,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

function NavBar() {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

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
              className="!bg-transparent !shadow-none  !font-bold hover:!bg-yelSee !text-lg !text-[#e18033] "
            >
              About Us
            </Button>
            <Button
              variant="contained"
              component={Link}
              to='/cremation'
              className="!bg-transparent !shadow-none !font-bold hover:!bg-yelSee !text-lg !text-[#e18033]"
            >
              Cremation Centers
            </Button>
            <Button
              variant="contained"
              component={Link}
              to='/rituals'
              className="!bg-transparent !shadow-none !font-bold hover:!bg-yelSee !text-lg !text-[#e18033]"
            >
              Rituals/Traditions
            </Button>

            {/* Adding the dropdown menu for the facilites that involves - Transportations, Pandits, Catering */}
            {/* The button */}
            <Button
              variant="contained"
              onClick={handleClick}
              className="!bg-transparent !shadow-none !font-bold hover:!bg-yelSee !text-lg !text-[#e18033] focus:!outline-none"
            >
              Facilities
            </Button>
            {/* The menu */}
            <Menu anchorEl={anchor} open={open} onClose={handleClose} classes={{paper: "!bg-gradient-to-br !from-[#a6c7d5] !to-[#82effb]",}}>

              <MenuItem onClick={handleClose} >
                <Button
                  variant="contained"
                  to=''
                  component = {Link}
                  className="!bg-transparent !shadow-none !font-bold hover:!bg-yelSee !text-lg !text-[#e18033]"
                >
                  Transportation
                </Button>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Button
                  variant="contained"
                  to=''
                  component = {Link}
                  className="!bg-transparent !shadow-none !font-bold hover:!bg-yelSee !text-lg !text-[#e18033]"
                >
                  Pandits
                </Button>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Button
                  variant="contained"
                  to=''
                  component = {Link}
                  className="!bg-transparent !shadow-none !font-bold hover:!bg-yelSee !text-lg !text-[#e18033]"
                >
                  Catering
                </Button>
              </MenuItem>

            </Menu>

            <Button
              variant="contained"
              to="/shop"
              component={Link}
              className="!bg-transparent !shadow-none !font-bold hover:!bg-yelSee !text-lg !text-[#e18033]"
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
