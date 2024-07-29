/* eslint-disable @next/next/no-img-element */
import {paths} from "@/utils";
import Link from "next/link";

export function AppLogo() {
  return (
    <Link href={paths.home}>
      <div className="flex gap-2 items-center origin-left max-sm:scale-95">
        <img src="/images/icon.svg" alt="CristalCare Logo" className="size-9" />
        <h2 className="font-degular-semibold text-primarytext-lg md:text-xl">Zaye Properties</h2>
      </div>
    </Link>
  );
}
