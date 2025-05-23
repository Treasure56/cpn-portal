"use client"
import CoursesSelect from "@/components/admin/CoursesSelect";

export default function Filters() {
  // const { params, pushParams } = useChangeSearchParams();
  // const {courses} = useCourses()
  return (
    <div className="flex gap-3 [&_select]:!py-2">
      <CoursesSelect />
    </div>
  );
}