import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router";

function NavItem({ label, to }) {
  return (
    <NavLink
    to={`${to}`}
    style={({ isActive }) => {
      return {
        background: isActive ? "#DDDDDD" : "",
        borderRadius: "0.5rem",
      };
    }}
  >
    <Typography as="li" color="black" className="p-1 font-medium">
        {label}
      </Typography>
  </NavLink>
  );
}

function NavList() {

  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate("/");
  }

  const onAboutClick = () => {
    navigate("/about");
  }

  const onContactClick = () => {
    navigate("/contact");
  }

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="Home" to="/" onClick={onHomeClick}/>
      <NavItem label="About Us" to="/about" onClick={onAboutClick} />
      <NavItem label="Contact Us" to="/contact" onClick={onContactClick}/>
    </ul>
  );
}

export function HomeNav() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  let navigate = useNavigate();

  const onSigninClick = () => {
    navigate("/signin");
  }

  const onSignupClick = () => {
    navigate("/signup");
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar color="transparent" fullWidth>
      <div className="container mx-auto flex items-center justify-between text-black">
        <Typography
          as="a"
          href="#"
          color="black"
          className="mr-4 cursor-pointer text-lg font-bold"
        >
          AssessAI
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden lg:flex items-center gap-4">
        <Button color="gray" className="hidden lg:inline-block" onClick={onSigninClick}>
          Sign in
        </Button>
        <Button color="red" className="hidden lg:inline-block" onClick={onSignupClick}>
          Get Started
        </Button>
        </div>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-white py-2">
          <NavList />
          <Button className="mb-2" fullWidth onClick={onSigninClick}>
            Sign in
          </Button>
          <Button className="mb-2" fullWidth color="red" onClick={onSignupClick}>
          Get Started
        </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default HomeNav;

