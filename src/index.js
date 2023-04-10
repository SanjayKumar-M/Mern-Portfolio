import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Calculator from './components/Calculator';
import Api from './components/Api';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
     path:"/calculator",
     element: <Calculator/>
  },
  {
   path:"/api",
   element: <Api />
},
{
  path:"/",
  element: <Calculator />
},
{
  path: "/",
  element: <Api />
}

]);


ReactDOM.createRoot(document.getElementById("root")).render(
   <RouterProvider router={router} />
);


