"use client"
import { withAll } from "@/functions/helpers";
import { AppSelect } from "../form";
import { useCenters, useChangeSearchParams } from "@/hooks";

export default function StatusSelect() {
    const { params, pushParams } = useChangeSearchParams();
    return (
       <div className="w-40 flex-shrink-0">
         <AppSelect
        variant="app-select"
        value={params.get('status') ?? ''}
        name="status"
        options={withAll(["completed", "pending"], 'statuses')}
        onChange={(e) => pushParams({ status: e })}
      />
       </div>
    );
}