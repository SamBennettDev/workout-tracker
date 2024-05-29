import { MainNavItem, NavItem } from "@/types/nav";
import { faHome, faList } from "@fortawesome/free-solid-svg-icons";

export const mainNav: MainNavItem[] = [
  {
    title: "Exercise List",
    href: "/exercise-list",
    icon: faList,
  },
];

export const appNav: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: faHome,
  },
  {
    title: "List",
    href: "/Exercise-List",
    icon: faList,
  },
];
