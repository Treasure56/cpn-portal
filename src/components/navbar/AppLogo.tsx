/* eslint-disable @next/next/no-img-element */
import { paths } from "@/utils";
import Link from "next/link";

export function AppLogo() {
  return (
    <Link href={paths.home}>
      <div className="flex gap-2 items-center origin-left max-sm:scale-95">
        <img
          src="/images/cpn-logo.png"
          alt="CristalCare Logo"
          className="w-36"
        />
        <h2 className="font-semibold text-primary text-lg md:text-xl">CPN</h2>
      </div>
    </Link>
  );
}
