import { Button, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from './pages/About';
import Events from "./pages/Events";
import Courses from "./pages/Courses";
import Page4 from "./pages/Page4";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: "/courses",
          element:<Courses/>
        },
        {
          path:"/events",
          element:<Events/>
        },
        {
          path:"/page4",
          element:<Page4/>
        }
      ],
    },
  ]);

  return (
    <div className="dark:bg-[#4a4a4a] dark:text-[#FFF]">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
