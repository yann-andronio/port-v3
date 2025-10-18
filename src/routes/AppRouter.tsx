import { createBrowserRouter } from "react-router-dom";
import PortfolioLayout from "../layouts/PortfolioLayout";
import Home from "../pages/portfolio/Home";
import Project from "../pages/portfolio/Project";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "project", element: <Project /> },
    ],
  },
]);
