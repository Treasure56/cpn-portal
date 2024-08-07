import { AppLogo } from "./AppLogo";

export default function Navbar() {
  return (
    <header className="h-16 w-full flex justify-evenly">
      <AppLogo />
      <nav className="flex gap-4"></nav>
    </header>
  );
}
