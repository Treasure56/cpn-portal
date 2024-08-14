import { AppLayoutProps } from "@/types/basicTypes";
import Sidebar from "./Sidebar";
// import { adminDashboard } from "@/actions/admin";
import { redirect, RedirectType } from "next/navigation";
import { paths } from "@/utils";
import { createMetadata } from "@/functions/metadata";
import '@radix-ui/themes/styles.css';
import { fetchAdmin } from "@/actions";
import CLientLayout from "./ClientLayout";
import { fetchManager } from "@/actions/fetch/fetchManager";

export const metadata = createMetadata({
    title: "CPN | Admin",
    description: "Welcome back to CPN Admin"
})

export const dynamic = 'force-dynamic';


export default async function Layout({ children }: AppLayoutProps) {
    const man = await fetchManager();
    if(!man || man === 'error') redirect(paths.adminLogin, RedirectType.replace);

    return (
        <CLientLayout>
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
                <section className="flex font-switzer">
                    <aside className="w-0 md:w-[250px] md:min-w-[250px] flex-shrink-0 relative border-r">
                        <Sidebar manager={man} />
                    </aside>
                    <aside className="w-full md:w-[calc(100%-250px)] md:max-w-[calc(100%-250px)] bg-neutral-background min-h-screen px-4 lg:px-8">
                        <div className="py-2" />
                        {children}
                        <div className="py-2" />
                    </aside>
                </section>
        </CLientLayout>
    );
}