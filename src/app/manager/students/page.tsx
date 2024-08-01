import { PageTitle } from "@/components/admin";
import Table from "./Table";
import CreateManager from "./CreateStudent";

export default function Page() {
  return (
    <section className="flex flex-col gap-4">
      <PageTitle className="py-2 flex justify-between w-full items-center">
        Students
        <CreateManager>
          <button className="btn-dark !py-1.5 !px-5 !font-normal !text-sm">
            Add Student +
          </button>
        </CreateManager>
      </PageTitle>

      <Table />
    </section>
  );
}
