import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Carousel from "./components/Carousel";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Carousel />,
      },
      {
        path: "/bookdescription",
        element: "",
      },
      {
        path: "*",
        element: "<h1>Page not found sorry ¯_(ツ)_/¯</h1>",
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
