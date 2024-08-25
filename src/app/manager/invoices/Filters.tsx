"use client"
import { AppSelect } from "@/components/form";
import { useChangeSearchParams } from "@/hooks";
import { withAll } from "@/functions/helpers";
import CenterSelect from "@/components/admin/CenterSelect";
import { useCourses } from "@/hooks/useCourses";

export default function Filters() {
  const { params, pushParams } = useChangeSearchParams();
  const {courses} = useCourses()
  return (
    <div className="flex gap-3 [&_select]:!py-2">
      
      {/* <CenterSelect /> */}
      <AppSelect
        variant="app-select"
        value={params.get('course') ?? ''}
        name="course"
        options={!courses ? ['loading...'] : withAll(courses.map(item => ({title: item.title, value: item.title}).value), 'courses')}
        onChange={(e) => pushParams({ course: e })}
      />
    </div>
  );
}