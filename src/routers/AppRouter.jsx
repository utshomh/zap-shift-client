import { createBrowserRouter, RouterProvider } from "react-router";

import * as warehouses from "../lib/api/warehouses";
// Layouts
import DefaultLayout from "../layouts/DefaultLayout";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
// General Pages
import HomePage from "../pages/common/HomePage";
import CoveragePage from "../pages/common/CoveragePage";
// Auth Pages
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
// Error Page
import ErrorPage from "../pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { path: "", index: true, element: <HomePage /> },
          {
            path: "coverage",
            element: <CoveragePage />,
            loader: warehouses.getAll,
          },
        ],
      },
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
