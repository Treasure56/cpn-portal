import { AdminSearch, PageTitle } from "@/components/admin";
import Table from "./Table";
import CreateManager from "./CreateCourses";

export default function Page() {
  return (
    <section className="flex flex-col gap-4">
      <PageTitle className="py-2 flex justify-between w-full items-center">
        Courses
        <CreateManager>
          <button className="btn-dark !py-1.5 !px-5 !font-normal !text-sm">
            Add course +
          </button>
        </CreateManager>
      </PageTitle>
      <div className="flex justify-between max-md:flex-col max-md:gap-2">
     <AdminSearch />
     </div>

      <Table />
    </section>
  );
}
