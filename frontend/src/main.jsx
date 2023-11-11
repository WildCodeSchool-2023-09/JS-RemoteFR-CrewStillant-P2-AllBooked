import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Carousel from "./components/Carousel";
import Recherche from "./pages/Recherche";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Carousel />,
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
        path: "/bookdescription",
        element: "",
      },
      {
        path: "*",
        element: <h1>Page not found sorry ¯_(ツ)_/¯</h1>,
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
