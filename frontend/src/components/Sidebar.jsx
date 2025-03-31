import { useState } from "react";
import { Drawer, List, ListItem, ListItemPrefix, Button, Typography } from "@material-tailwind/react";
import { Menu, User, Home, History, Info, BookOpenText, LogOut } from "lucide-react";
import { useNavigate } from "react-router";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", icon: <Home size={20} />, onClick: () => navigate("/userhome") },
    { label: "Create Test", icon: <BookOpenText size={20} />, onClick: () => navigate("/createtest") },
    { label: "Test History", icon: <History size={20} />, onClick: () => navigate("/settings") },
    { label: "About", icon: <Info size={20} />, onClick: () => navigate("/about") },
  ];

  const navigateToProfile = () => {
    navigate("/UserProfile");
  };

  return (
    <div className="flex">
      {!open && (
        <Button
          variant="text"
          className="text-black fixed top-4 left-4 z-50"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </Button>
      )}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        overlay={false}
        className="bg-gray-900 text-white w-64 shadow-lg"
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h1 className="text-xl font-bold">AssessAI</h1>
          <Button
            variant="text"
            className="text-white"
            onClick={() => setOpen(false)}
          >
            <Menu size={24} />
          </Button>
        </div>

        {/* Profile Section */}
        <div
          className="p-4 flex items-center gap-4 border-b border-gray-700 cursor-pointer hover:bg-gray-800 transition"
          onClick={navigateToProfile}
        >
          <User size={32} />
          <div>
            <p className="font-medium">Kirtan Patel</p>
            <p className="text-sm text-gray-400">kirtan@example.com</p>
          </div>
        </div>

        {/* Menu Items */}
        <List className="mt-4">
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              className="cursor-pointer flex items-center gap-4 px-4 py-3 hover:bg-gray-800 transition rounded-lg"
              onClick={item.onClick}
            >
              <ListItemPrefix>{item.icon}</ListItemPrefix>
              <Typography className="text-white font-medium">{item.label}</Typography>
            </ListItem>
          ))}
        </List>

        {/* Logout Button */}
        <div className="mt-auto p-4">
          <Button
            variant="text"
            className="w-full text-red-500 hover:bg-gray-800 transition rounded-lg flex items-center gap-2 justify-center"
            onClick={() => navigate("/signin")}
          >
            <LogOut size={20} />
            Logout
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
