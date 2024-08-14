import { studentDummy } from "@/utils/dummy";
import Profile from "./Profile";
import { PageTitle } from "@/components/admin";
import Courses from "./Courses";
import Table from "./Table";

 export default function Page() {
    
    
    return (
        <section className="flex flex-col gap-4">
            <PageTitle>Student Details</PageTitle>
           <Profile {...studentDummy} />
          <Courses />
          <Table />
        </section>
    );
 }