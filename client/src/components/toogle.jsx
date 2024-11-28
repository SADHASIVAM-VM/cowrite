import { Moon, Sun } from "lucide-react";

import { useTheme } from "./Themeproviders";
import { useEffect } from "react";

export function ModeToggle() {
  const {theme, setTheme } = useTheme();
 

  return (
    <>
    <button className=" rounded-full transition-transform ease-in-out">
  {theme === "dark" ? (
    <Sun color="yellow"
      className=" transition-all"
      onClick={() => setTheme("light")}
    />
  ) : (
    <Moon 
      className="transition-all"
      onClick={() => setTheme("dark")}
    />
  )}
</button>

    
     
    </>
  );
}
