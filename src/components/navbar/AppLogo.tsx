/* eslint-disable @next/next/no-img-element */
import { paths } from "@/utils";
import Link from "next/link";

const HOST = process.env.HOST || "";
export function AppLogo({toWebsite = false}:{toWebsite?:boolean}) {
  return (
    <Link href={toWebsite ? HOST : paths.home}>
      <div className="flex gap-1 items-center origin-left max-sm:scale-95">
        <img
          src="/images/cpn-logo.png"
          alt="CristalCare Logo"
          className="w-14 max-w-full"
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
