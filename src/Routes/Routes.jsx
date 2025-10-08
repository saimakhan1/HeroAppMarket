import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Installation from "../Pages/Installation/Installation";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello Book Vibe ~~ Boi Poka</div>,
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        // loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        index: true,
        path: "/installation",
        Component: Installation,
      },
      {
        index: true,
        loader: () => fetch("appsData1.json"),
        path: "/apps",
        Component: Apps,
      },

      {
        index: true,
        // loader: () => fetch("appsData1.json"),
        path: "/appDetails/:id",
        Component: AppDetails,
      },
    ],
  },
]);
