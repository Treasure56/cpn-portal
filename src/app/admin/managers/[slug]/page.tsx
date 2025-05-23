import { adminFetchSigleManager } from "@/actions";
import { PageTitle } from "@/components/admin";
import { buildUrlQuery } from "@/functions/helpers";
import { AppPageProps } from "@/types/basicTypes";
import Profile from "./Profile";
import Table from "./Table";

export default async function Page({ params, searchParams }: AppPageProps) {
  const query = buildUrlQuery(searchParams);
  const manager = await adminFetchSigleManager(params.slug);
  if (!manager || manager == "error")
    return <div className="info">error fetching staff</div>;

  console.log({ manager });

  return (
    <section className="flex flex-col gap-4">
      <PageTitle>Manager Details</PageTitle>
      <Profile {...manager} />
      <Table query={query} manager={manager} />
    </section>
  );
}
