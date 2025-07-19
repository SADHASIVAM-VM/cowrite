import { Home } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-center">
      <img src="/er404.png" alt="" className="w-full" />
      <h1 className="text-9xl font-bold text-red-500 hq">404!</h1>
      
      <a href="/" className="mt-6 text-sm px-4 py-2 md:px-6 md:py-3 hd border-2 flex items-center gap-2 rounded-lg transition">
        <Home size={"20px"}/> Go Home
      </a>
    </div>
  );
};

export default NotFound;
