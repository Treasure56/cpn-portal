/* eslint-disable @next/next/no-img-element */
import { paths } from "@/utils";
import { AppLogo } from "./AppLogo";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Navbar() {
  return (
    <header className="h-16 w-full flex justify-between items-center app-container py-2">
      <div className="w-fit flex items-center gap-2">
        <AppLogo />
        <img
          src="/images/cpms.png"
          alt="cpms Logo"
          className="w-20 max-w-full"
        />
      </div>
      <nav className="flex gap-4 h-full items-center max-md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className=" font-[500] hover:text-cpn-darkgreen transition-all duration-300"
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <Link
        href={paths.adminLogin}
        className="btn-primary !px-5 !py-2 !text-cpn-darkgreen hover:!bg-cpn-lightgreen !bg-transparent !border-cpn-darkgreen !rounded-[40px]"
      >
        Portal
        <BsArrowRight />
      </Link>
    </header>
  );
}

const navLinks = [
  {
    title: "Home",
    href: paths.home + "#Home",
  },
  {
    title: "About Us",
    href: paths.home + "#About",
  },
  {
    title: "Services",
    href: paths.home + "#Services",
  },
  {
    title: "Contact Us",
    href: paths.home + "#Contact",
  },
];
