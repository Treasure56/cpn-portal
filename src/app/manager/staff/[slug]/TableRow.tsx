import { StaffCertificate } from "@/types";
import { FcDocument } from "react-icons/fc";
import DeleteModal from "./DeleteModal";
import { RiDeleteBinLine } from "react-icons/ri";

export default function TableRow(props: StaffCertificate) {
  // console.log(plan_id);

  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
      {/* <td className="py-1 flex flex-col">
        <p className="font-[500]">{"name"}</p>
        <p>{"johndoe@it.com"}</p>
      </td> */}
      <td>{props.name}</td>
      <td>
        <div className="flex gap-2">
          <a
            href={props.url}
            target="_blank"
            className=" btn-delete !px-3 !py-1.5 inline-flex items-center gap-1"
          >
            <FcDocument /> open
          </a>
        </div>
      </td>

      <td>
        <div className="flex gap-2 justify-end">
          <DeleteModal
            certificate={{
              name: props.name,
              url: props.url,
              _id: props._id,
            }}
          >
            <button className="btn-delete">
              <RiDeleteBinLine />
            </button>
          </DeleteModal>
        </div>
      </td>
    </tr>
  );
}
