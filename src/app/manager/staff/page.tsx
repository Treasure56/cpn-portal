import { AdminSearch, PageTitle } from "@/components/admin";
import Table from "./Table";
import CreateStaff from "./CreateStaff";
import { AppPageProps } from "@/types/basicTypes";
import { buildUrlQuery } from "@/functions/helpers";

export default function Page({searchParams}:AppPageProps) {
  const query = buildUrlQuery(searchParams);
  return (
    <section className="flex flex-col gap-4">
      <PageTitle className="py-2 flex justify-between w-full items-center">
        Staffs
        <CreateStaff>
          <button className="btn-dark !py-1.5 !px-5 !font-normal !text-sm">
            Add staff +
          </button>
        </CreateStaff>
      </PageTitle>
      <div className="flex justify-between max-md:flex-col max-md:gap-2">
     <AdminSearch />
     </div>

      <Table query={query} />
    </section>
  );
}
