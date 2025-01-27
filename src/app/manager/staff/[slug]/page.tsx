import { fetchSingleStaff } from "@/actions/fetch/fetchSingleStaff";
import { PageTitle } from "@/components/admin";
import { buildUrlQuery } from "@/functions/helpers";
import { AppPageProps } from "@/types/basicTypes";
import Profile from "./Profile";
import Table from "./Table";

export default async function Page({ params, searchParams }: AppPageProps) {
  const query = buildUrlQuery(searchParams);
  const staff = await fetchSingleStaff(params.slug);
  if (!staff || staff == "error")
    return <div className="info">error fetching staff</div>;

//   console.log({ staff });

  return (
    <section className="flex flex-col gap-4">
      <PageTitle>Staff Details</PageTitle>
      <Profile {...staff} />
      {/* <Courses {...student} /> */}
      <Table query={query} staff={staff} />
    </section>
  );
}
