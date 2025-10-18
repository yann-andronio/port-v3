import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

export default function PortfolioLayout() {
  return (
    <>
    
      <nav className="fixed top-8 left-0 w-full z-50 bg-black/50 backdrop-blur-sm transition duration-300">
        <Navbar />
      </nav>
      
      <main className=""> 
        <Outlet />
      </main>
    
    </>
  );
}