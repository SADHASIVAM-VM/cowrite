import { Home } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative text-center">
      <img src="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg" alt="" className="w-full h-full" />
     
      <a href="/" className="mt-6 text-white absolute bottom-44 text-sm px-4 py-2 md:px-6 md:py-3 hd border-2 flex items-center gap-2 rounded-lg transition">
        <Home size={"20px"}/> Go Home
      </a>
    </div>
  );
};

export default NotFound;
