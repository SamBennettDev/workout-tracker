import { mainNav } from "@/config/nav-items";
import { ThemeToggle } from "./ThemeToggleSwitch";
import { Link, useLocation } from "react-router-dom";

export const navbarHeight = 50; // Set the navbar height here

export function Navbar() {
  const location = useLocation();

  return (
    <nav
      className={`h-[${navbarHeight}px] flex justify-between items-center mx-[20px]`}
    >
      <div className="flex gap-[10px]">
        <Link to="/" className="flex items-center justify-center mr-[10px]">
          <div className="font-bold">React</div>
          <div className="">Essentials</div>
        </Link>
        {mainNav.map((navItem, index) => {
          return (
            <Link
              className={
                location.pathname === navItem.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground "
              }
              key={index}
              to={navItem.href}
              target={navItem.external ? "_blank" : undefined}
            >
              {navItem.title}
            </Link>
          );
        })}
      </div>
      <ThemeToggle />
    </nav>
  );
}
