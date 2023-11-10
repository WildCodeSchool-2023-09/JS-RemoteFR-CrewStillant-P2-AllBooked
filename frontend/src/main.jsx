import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import NotFound from "./pages/NotFound";
import DetailSelection from "./pages/DetailSelection";

import ListCardSelection from "./components/ListCardSelection";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ListCardSelection />,
      },
      {
        path: "/DetailSelection/:bookId",
        element: <DetailSelection />,
      },

      {
        path: "*",
        element: <NotFound />,
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
