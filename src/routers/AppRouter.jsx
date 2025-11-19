import { createBrowserRouter, RouterProvider } from "react-router";

import * as warehouses from "../lib/api/warehouses";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import Coverage from "../pages/Coverage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", index: true, element: <HomePage /> },
      { path: "coverage", element: <Coverage />, loader: warehouses.getAll },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
