"use client";
import { useChangeSearchParams } from "@/hooks";
import CenterSelect from "@/components/admin/CenterSelect";
import CoursesSelect from "@/components/admin/CoursesSelect";
import DateSelect from "@/components/admin/DateSelect";

export default function Filters() {
  return (
    <div className="flex gap-3 [&_select]:!py-2">
      <CenterSelect />
      <DateSelect />
      <CoursesSelect />
    </div>
  );
}
