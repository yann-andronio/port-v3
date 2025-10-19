import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function PortfolioLayout() {
  return (
    <>
    
    
        <Navbar />
    
      
      <main className=""> 
        <Outlet />
      </main>
    
    </>
  );
}