import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CircleX,
  LogIn,
  Menu,
  Moon,
  MoonStar,
  Sun,
  SunDim,
  X,
} from "lucide-react";
import { useTheme } from "./Themeproviders";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  const { theme, setTheme } = useTheme();
  const [op, setOp] = useState(null);

  // Handle screen resizing to reset the menu state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false); // Close menu when switching to desktop
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-between items-center h-[70px] px-2 md:px-16 relative">
      {/* Logo (Hidden in mobile when menu is open) */}
      <div className={`flex-1 ${open && isMobile ? "hidden" : "flex"}`}>
        <h1
          className="text-2xl font-bold cursor-pointer hd"
          onClick={() => navigate("/")}
        >
          Co<span className="text-yellow-300">Write</span>
        </h1>
      </div>

      {/* Navigation Menu */}
      <div className="md:px-5 p-2 flex-1 flex justify-center">
        <ul
          className={`text-sm font-medium flex space-x-5 cursor-pointer transition-all ${
            open || !isMobile ? "flex" : "hidden md:flex"
          }`}
        >
          <li
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
            className="hover:scale-110 transition-all"
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/blogs");
              setOpen(false);
            }}
            className="hover:scale-110 transition-all"
          >
            Blogs
          </li>
          <li
            onClick={() => {
              navigate("/save");
              setOpen(false);
            }}
            className="hover:scale-110 transition-all"
          >
            Favorite
          </li>
          <li
            onClick={() => {
              navigate("/post");
              setOpen(false);
            }}
            className="hover:scale-110 transition-all"
          >
            action
          </li>
        </ul>
      </div>

      {/* Sign-In Button*/}
      <div
        className={`flex-1 flex items-center justify-end gap-2 ${
          open && isMobile ? "hidden" : "flex"
        }`}
      >
        <button className="  ">
          
          <SignedOut className="">
            <SignInButton className=" md:text-[12px] border-2 p-1 rounded-md">{isMobile? <LogIn size={"28px"}/> : <span className="py-1 px-2 border-2">sign in</span>}</SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </button>

        <button className="flex mr-3">
          {theme == "dark" ? (
            <Sun size={20} color="yellow" onClick={() => setTheme("light")} />
          ) : (
            <Moon size={20} onClick={() => setTheme("dark")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {!open ? <Menu size={25} /> : <CircleX size={20} color="red" />}
      </div>
    </div>
  );
};

export default Navbar;
