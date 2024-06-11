import { Account, AccountSettings } from "@/features/account";
import { ProtectedHome } from "@/features/home";
import { ExerciseAnalytics, ExerciseList, Timer } from "@/features/pages";

export const protectedRoutes = [
  {
    path: "/",
    element: <ProtectedHome />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/signup",
    element: <ProtectedHome />,
  },
  {
    path: "/account-settings",
    element: <AccountSettings />,
  },
  {
    path: "/exercise-list",
    element: <ExerciseList />,
  },
  {
    path: "/exercise-history",
    element: <ExerciseAnalytics />,
  },
  {
    path: "/timer",
    element: <Timer />,
  },
];
