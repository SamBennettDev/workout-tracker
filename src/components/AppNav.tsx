import { appNav } from "@/config/nav-items";
import { navbarHeight } from "@/utils/sizes";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export function AppNav() {
  const location = useLocation();

  return (
    <nav
      className={`flex justify-around items-center md:hidden bg-card`}
      style={{ height: `${navbarHeight}px` }}
    >
      {appNav.map((navItem) => {
        return (
          <Link
            className={
              location.pathname === navItem.href
                ? "text-foreground w-full h-full flex items-center justify-center"
                : "text-muted-foreground hover:text-foreground w-full h-full flex items-center justify-center"
            }
            to={navItem.href}
            key={navItem.title}
            target={navItem.external ? "_blank" : undefined}
          >
            <FontAwesomeIcon
              icon={navItem.icon}
              className="text-2xl"
            ></FontAwesomeIcon>
          </Link>
        );
      })}
      <Link
        className={
          location.pathname === "/Account"
            ? "text-foreground w-full h-full flex items-center justify-center"
            : "text-muted-foreground hover:text-foreground w-full h-full flex items-center justify-center"
        }
        to={"/Account"}
        key={"Account"}
      >
        <FontAwesomeIcon icon={faUser} className="text-2xl"></FontAwesomeIcon>
      </Link>
    </nav>
  );
}
