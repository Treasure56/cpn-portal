"use client"
import { AppSelect } from "@/components/form";
import { useChangeSearchParams } from "@/hooks";
import { withAll } from "@/functions/helpers";
import CenterSelect from "@/components/admin/CenterSelect";

export default function Filters() {
  const { params, pushParams } = useChangeSearchParams();
  return (
    <div className="flex gap-3 [&_select]:!py-2">
      
      <CenterSelect />
      <AppSelect
        variant="app-select"
        value={params.get('course') ?? ''}
        name="course"
        options={withAll([], 'courses')}
        onChange={(e) => pushParams({ course: e })}
      />
    </div>
  );
}