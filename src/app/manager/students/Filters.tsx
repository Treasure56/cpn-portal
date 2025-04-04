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
      <AppSelect
        variant="app-select"
        value={params.get('course') ?? ''}
        name="course"
        readonly={!courses} options={!courses ? ['loading...'] : withAll(courses.map(item => ({title: item.title, value: item._id})), "courses")}
        onChange={(e) => pushParams({ course: e })}
      />
    </div>
  );
}