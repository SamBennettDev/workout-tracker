import { PublicHome } from "@/features/home";
import { ErrorPage } from "@/features/misc";

export const publicRoutes = [
  {
    path: "/",
    element: <PublicHome />,
    errorElement: <ErrorPage />,
  },
];
