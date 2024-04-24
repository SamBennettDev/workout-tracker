import { navbarHeight } from "@/components/Navbar";
import { H1 } from "@/components/Typography";

export const PublicHome = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      <H1>Please Login</H1>
    </div>
  );
};
