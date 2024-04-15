import { ThemeToggle } from "./ThemeToggleSwitch";

export function Navbar() {
  return (
    <nav className="h-[50px] flex justify-between items-center mx-[20px]">
      <div>Navbar</div>
      <ThemeToggle />
    </nav>
  );
}
