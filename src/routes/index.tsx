import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage } from "@/features/misc";
import { Landing } from "@/features/misc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
