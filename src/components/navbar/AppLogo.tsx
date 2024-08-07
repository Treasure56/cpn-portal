/* eslint-disable @next/next/no-img-element */
import { paths } from "@/utils";
import Link from "next/link";

export function AppLogo() {
  return (
    <Link href={paths.home}>
      <div className="flex gap-1 items-center origin-left max-sm:scale-95">
        <img
          src="/images/cpn-logo.png"
          alt="CristalCare Logo"
          className="w-36 max-w-full"
        />
        <h2 className="font-[500] text-primary text-sm leading-[12px]">
          Center <br />
          Point <br />
          Network
        </h2>
      </div>
    </Link>
  );
}
