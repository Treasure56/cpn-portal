"use client"
import { fetchCenters } from "@/actions";
import CenterSelect from "@/components/admin/CenterSelect";

export default function Filters() {
  return (
    <div className="flex gap-3 [&_select]:!py-2">
      
      <CenterSelect />
    </div>
  );
}