import { ProtectedHome } from "@/features/home";
import { ErrorPage } from "@/features/misc";

export const protectedRoutes = [
  {
    path: "/",
    element: <ProtectedHome />,
    errorElement: <ErrorPage />,
  },
];
