import { createBrowserRouter, RouterProvider } from "react-router";

import * as warehouses from "../lib/api/warehouses";
import PrivateRoute from "./PrivateRoute";
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
// Special Pages
import ErrorPage from "../pages/error/ErrorPage";
import LoadingPage from "../pages/common/LoadingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingPage />,
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
          {
            path: "be-a-rider",
            element: (
              <PrivateRoute>
                <LoadingPage />
              </PrivateRoute>
            ),
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
