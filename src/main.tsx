import { StrictMode, useEffect } from "react"; 
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRouter";
import './index.css'
import { ThemeProvider } from "./context/ThemeContext";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,  
      easing: 'ease-out', 
    });
  }, []); 

  return (
    <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);