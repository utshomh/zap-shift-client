import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import * as warehouses from "../lib/api/warehouses";
import PrivateRoute from "./PrivateRoute";
// Layouts
const DefaultLayout = lazy(() => import("../layouts/DefaultLayout"));
const RootLayout = lazy(() => import("../layouts/RootLayout"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout"));
const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));
// Dashboard Pages
const MyParcelsPage = lazy(() => import("../pages/dashboard/MyParcelsPage"));
const SendParcelPage = lazy(() => import("../pages/dashboard/SendParcelPage"));
// Payment Pages
const PaymentPage = lazy(() => import("../pages/payment/PaymentPage"));
const PaymentSuccessPage = lazy(() =>
  import("../pages/payment/PaymentSuccessPage")
);
const PaymentCancelledPage = lazy(() =>
  import("../pages/payment/PaymentCancelledPage")
);
// Customer Pages
const HomePage = lazy(() => import("../pages/customer/HomePage"));
const CoveragePage = lazy(() => import("../pages/customer/CoveragePage"));
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
          {
            path: "payment/:id",
            element: (
              <PrivateRoute>
                <PaymentPage />
              </PrivateRoute>
            ),
          },
          {
            path: "payment-success",
            element: (
              <PrivateRoute>
                <PaymentSuccessPage />
              </PrivateRoute>
            ),
          },
          {
            path: "payment-cancelled",
            element: (
              <PrivateRoute>
                <PaymentCancelledPage />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
