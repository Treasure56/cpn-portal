import { AppLayoutProps } from "@/types/basicTypes";
import Sidebar from "./Sidebar";
// import { adminDashboard } from "@/actions/admin";
import { redirect, RedirectType } from "next/navigation";
import { paths } from "@/utils";
import { createMetadata } from "@/functions/metadata";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { Admin } from "@/types";

export const metadata = createMetadata({
    title: "CPN | Admin",
    description: "Welcome back to CPN Admin"
})

export const dynamic = 'force-dynamic';

export default async function Layout({ children }: AppLayoutProps) {
    // const admin = await adminDashboard();
    // if(!admin || admin === 'error') redirect(paths.adminLogin, RedirectType.replace);
    const admin = { _id: "jfsahbkhdsb", email: "test@cpn.com" }

    return (
        <Theme>
            <section className="flex font-switzer">
                <aside className="w-0 md:w-[250px] md:min-w-[250px] flex-shrink-0 relative border-r">
                    <Sidebar admin={admin as Admin} />
                </aside>
                <aside className="w-full md:w-[calc(100%-250px)] md:max-w-[calc(100%-250px)] bg-neutral-background min-h-screen px-4 lg:px-8">
                    <div className="py-2" />
                    {children}
                    <div className="py-2" />
                </aside>
            </section>
        </Theme>
    );
}