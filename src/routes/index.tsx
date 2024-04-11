import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

import { useAuth } from "@/lib/auth";
import { ErrorPage } from "@/features/misc";
import { FOFPage } from "@/features/misc";

const commonRoutes = [
  {
    path: "*",
    element: <FOFPage />,
    errorElement: <ErrorPage />,
  },
];

export const AppRoutes = () => {
  const [auth] = useAuth();

  const routes = auth.user
    ? protectedRoutes.concat(commonRoutes)
    : publicRoutes.concat(commonRoutes);

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
