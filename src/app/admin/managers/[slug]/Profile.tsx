import { Manager, Staff, Students } from "@/types";
import { Avatar } from "@radix-ui/themes";
import { FaCalendar, FaEnvelope, FaPhone } from "react-icons/fa6";
import ProfileModal from "./profileModal";

export default function Profile(manager: Manager) {
    const {
        _id,
        fullname,
        email,
        phone,
      } = manager;
  const initials = manager?.fullname?.toUpperCase()
    .split(" ")
    .map((v, i) => v[0])
    .join("");

  return (
    <div className=" flex gap-4 items-center">
      <ProfileModal manager={manager}>
        <button>
          <Avatar
            variant="solid"
            color="gray"
            fallback={initials}
            size="7"
            radius="full"
            src={manager.image}
          />
        </button>
      </ProfileModal>
      <div className="flex flex-col gap-1">
        <h2 className="heading">{fullname}</h2>
        <div className="flex flex-wrap gap-4">
          <p className="text-sm text-neutral-500 bg-neutral-100 rounded-lg p-2 inline-flex gap-1 items-center">
            <FaEnvelope /> {email}
          </p>
          <p className="text-sm text-neutral-500 bg-neutral-100 rounded-lg p-2 inline-flex gap-1 items-center">
            {" "}
            <FaPhone /> {phone}
          </p>
        </div>
      </div>
    </div>
  );
}
