import { AdminSearch, PageTitle } from "@/components/admin";
import Table from "./Table";
import Filters from "./Filters";
import { AppPageProps } from "@/types/basicTypes";
import { buildUrlQuery } from "@/functions/helpers";

export default function Page({searchParams}:AppPageProps) {
  const query = buildUrlQuery(searchParams);
  return (
    <section className="flex flex-col gap-4">
      <PageTitle className="py-2 flex justify-between w-full items-center">
        Payments
      </PageTitle>
     <div className="flex justify-between max-md:flex-col max-md:gap-2">
     {/* <AdminSearch />
     <Filters /> */}
     </div>

      <Table  query={query} />
    </section>
  );
}
