import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import NotFound from "./pages/NotFound";
import DetailSelection from "./pages/DetailSelection";
import App from "./App";
import Home from "./components/Home";
import SearchResults from "./pages/SearchResults";

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
