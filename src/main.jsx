import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import Home from "./pages/Home/Home"
import Layout from './layout/Layout'
import { createHashRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from 'react';
import Contact from './pages/Contact/Contact'
import Sfx from './pages/Package/Sfx/Sfx'
import Vfx from './pages/Package/Vfx/Vfx'
import Gfx from './pages/Package/Gfx/Gfx'
import Visuals from './pages/Package/Visuals/Visuals'
import TitleCard from './pages/Package/TitleCard/TitleCard'
import About from './pages/Package/About/About'

const router = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/sfx", element: <Sfx/>},
  { path: "/gfx", element: <Gfx/>},
  { path: "/vfx", element: <Vfx/>},
  { path: "/visuals", element: <Visuals/>},
  { path: "/titlecard", element: <TitleCard/>},
  { path: "/about", element: <About/>},
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <Home /> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </StrictMode>
);