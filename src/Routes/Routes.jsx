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
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: async () => null, // triggers loading
        Component: Home,
      },
      {
        index: true,
        path: "/installation",
        loader: async () => null, // triggers loading
        Component: Installation,
      },
      {
        index: true,
        loader: () => fetch("/appsData1.json"),
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
