import { withAll } from "@/functions/helpers";
import { AppSelect } from "../form";
import { useCenters, useChangeSearchParams } from "@/hooks";

export default function CenterSelect() {
    const { params, pushParams } = useChangeSearchParams();
    const {centers} = useCenters();
    return (
        <AppSelect
        variant="app-select"
        value={params.get('center') ?? ''}
        name="center"
        // options={withAll([], 'centers')}
        readonly={!centers} options={!centers ? ['loading...'] : withAll(centers.map(item => ({title: item.name, value: item._id})), "centers")}
        onChange={(e) => pushParams({ center: e })}
      />
    );
}