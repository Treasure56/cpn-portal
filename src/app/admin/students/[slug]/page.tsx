import { studentDummy } from "@/utils/dummy";
import Profile from "./Profile";
import { PageTitle } from "@/components/admin";
import Courses from "./Courses";
import Table from "./Table";
import { fetchSingleStudent } from "@/actions/fetch/singleStudent";
import { buildUrlQuery } from "@/functions/helpers";
import { AppPageProps } from "@/types/basicTypes";
import { adminFetchSingleStudent } from "@/actions";

export default async function Page({ params, searchParams }: AppPageProps) {
    const query = buildUrlQuery(searchParams)
    const student = await adminFetchSingleStudent(params.slug);
    if (!student || student == "error") return <div className="info">error fetching student</div>;

    return (
        <section className="flex flex-col gap-4">
            <PageTitle>Student Details</PageTitle>
            <Profile {...student} />
            <Courses {...student} />
            <Table query={query} studentId={student._id} />
        </section>
    );
}