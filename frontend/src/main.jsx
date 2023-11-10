import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import App from "./App";

// Pages
import MyBooks from "./pages/MyBooks";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: "",
      },
      {
        path: "/mybooks",
        element: <MyBooks />,
      },
      {
        path: "/bookdescription",
        element: "",
      },
      {
        path: "*",
        element: "Page not found sorry ¯(ツ)/¯",
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
