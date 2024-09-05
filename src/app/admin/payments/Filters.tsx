"use client"
import { useChangeSearchParams } from "@/hooks";
import CenterSelect from "@/components/admin/CenterSelect";
import CoursesSelect from "@/components/admin/CoursesSelect";

export default function Filters() {
  const { params, pushParams } = useChangeSearchParams();
  return (
    <div className="flex gap-3 [&_select]:!py-2">
      
      <CenterSelect />
      <CoursesSelect />
    </div>
  );
}