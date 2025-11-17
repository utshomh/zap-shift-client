import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "", index: true, element: <HomePage /> }],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
