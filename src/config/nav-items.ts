import { MainNavItem, NavItem } from "@/types/nav";
import {
  faChartLine,
  faClock,
  faHome,
  faList,
} from "@fortawesome/free-solid-svg-icons";

export const mainNav: MainNavItem[] = [
  {
    title: "Exercise List",
    href: "/exercise-list",
    icon: faList,
  },
  {
    title: "History",
    href: "/exercise-history",
    icon: faChartLine,
  },
  {
    title: "Timer",
    href: "/timer",
    icon: faClock,
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
  {
    title: "History",
    href: "/exercise-history",
    icon: faChartLine,
  },
  {
    title: "Timer",
    href: "/timer",
    icon: faClock,
  },
];
