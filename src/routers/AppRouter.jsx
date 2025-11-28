import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import * as warehouses from "../lib/api/warehouses";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcelsPage from "../pages/dashboard/MyParcelsPage";
// Layouts
const DefaultLayout = lazy(() => import("../layouts/DefaultLayout"));
const RootLayout = lazy(() => import("../layouts/RootLayout"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout"));
// Customer Pages
const HomePage = lazy(() => import("../pages/customer/HomePage"));
const CoveragePage = lazy(() => import("../pages/customer/CoveragePage"));
const SendParcelPage = lazy(() => import("../pages/customer/SendParcelPage"));
const AboutPage = lazy(() => import("../pages/customer/AboutPage"));
// Auth Pages
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage"));
// Common Pages
const ErrorPage = lazy(() => import("../pages/common/ErrorPage"));
const LoadingPage = lazy(() => import("../pages/common/LoadingPage"));

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
            path: "about",
            element: <AboutPage />,
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
      {
        path: "dashboard/",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "my-parcels",
            element: <MyParcelsPage />,
          },
          {
            path: "add-parcel",
            element: (
              <PrivateRoute>
                <SendParcelPage />
              </PrivateRoute>
            ),
            loader: warehouses.getAll,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
