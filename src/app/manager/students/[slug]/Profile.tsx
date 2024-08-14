import { Students } from "@/types";
import { Avatar } from "@radix-ui/themes";
import { FaCalendar, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Profile({_id, birth_date, fullname: full_name, email, phone, student_id}:Students) {
    const initials = full_name.toUpperCase().split(" ").map((v, i)=> v[0]).join("");
    
    return (
        <div className=" flex gap-4 items-center">
             <Avatar variant="solid" color="gray" fallback={initials} size="7" radius="full" />
            <div className="flex flex-col gap-1">
                <h2 className="heading">{full_name} ({student_id})</h2>
               <div className="flex flex-wrap gap-4">
                <p className="text-sm text-neutral-500 bg-neutral-100 rounded-lg p-2 inline-flex gap-1 items-center"><FaEnvelope /> {email}</p>
                <p className="text-sm text-neutral-500 bg-neutral-100 rounded-lg p-2 inline-flex gap-1 items-center"> <FaPhone /> {phone}</p>
                <p className="text-sm text-neutral-500 bg-neutral-100 rounded-lg p-2 inline-flex gap-1 items-center"> <FaCalendar /> {birth_date}</p>
               </div>
            </div>
        </div>
    );
}