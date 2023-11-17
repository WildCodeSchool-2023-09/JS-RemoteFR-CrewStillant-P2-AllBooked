import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

// Components

import App from "./App";
import Home from "./components/Home";
import SearchResults from "./pages/SearchResults";

// Pages

import MyBooks from "./pages/MyBooks";
import NotFound from "./pages/NotFound";
import DetailSelection from "./pages/DetailSelection";

const ApiUrl = import.meta.env.VITE_API_URL;
const ApiKey = import.meta.env.VITE_API_KEY;
const ApiUrl2 = import.meta.env.VITE_API_URL2;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`${ApiUrl}${ApiKey}&q=potter&maxResults=6`),
      },
      {
        path: "searchresults/:results",
        element: <SearchResults />,
        loader: ({ params }) => fetch(`${ApiUrl}${ApiKey}&q=${params.results}`),
      },
      {
        path: "detailselection/:id",
        element: <DetailSelection />,
        loader: ({ params }) =>
          fetch(`${ApiUrl2}${params.id}`, {
            headers: {
              Authorization: `${ApiKey}`,
            },
          }),
      },
      {
        path: "/mybooks",
        element: <MyBooks />,
        loader: () =>
          fetch(
            "https://www.googleapis.com/books/v1/volumes?q=harry+inauthor:rowling&maxResults=40&printType=books&key=AIzaSyCRqS28SI90ab1CXYQ0DUmXdL_P_vRGVEM"
          ),
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
