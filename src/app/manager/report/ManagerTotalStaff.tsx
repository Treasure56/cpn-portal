import { fetchStaff } from "@/actions";
import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { PiUsersFourBold } from "react-icons/pi";

export default async function ManagerTotalStaff() {
  const staff = await fetchStaff();
  if (!staff || staff == "error")
    return <div className="info">error fetching staffs</div>;
  return (
    <AdminOverViewCard
      title="Total Staff"
      icon={<MdOutlineCalendarMonth />}
      count={staff.length}
      color="#226"
    />
  );
}
