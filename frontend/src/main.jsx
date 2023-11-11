import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import NotFound from "./pages/NotFound";
import DetailSelection from "./pages/DetailSelection";
import App from "./App";
import Recherche from "./pages/Recherche";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recherche/:search",
        element: <Recherche />,
        loader: ({ params }) => {
          fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${params.search}&printType=books&key=AIzaSyCRqS28SI90ab1CXYQ0DUmXdL_P_vRGVEM&maxResults=40`
          );
        },
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
