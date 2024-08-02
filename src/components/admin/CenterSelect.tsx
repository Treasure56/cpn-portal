import { withAll } from "@/functions/helpers";
import { AppSelect } from "../form";
import { useChangeSearchParams } from "@/hooks";

export default function CenterSelect() {
    const { params, pushParams } = useChangeSearchParams();
    return (
        <AppSelect
        variant="app-select"
        value={params.get('center') ?? ''}
        name="center"
        options={withAll([], 'centers')}
        onChange={(e) => pushParams({ center: e })}
      />
    );
}