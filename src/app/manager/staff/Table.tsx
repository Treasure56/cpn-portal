import TableRow from "./TableRow";
import { fetchStaff } from "@/actions";

export default async function Table() {
  const staffs = await fetchStaff();
  if(!staffs || staffs == "error") return <div className="info">error fetching staffs</div>;
  // console.log(staffs);
  
    return (
      <div className="w-full max-w-full overflow-x-auto [&>table]:mb-6">
      <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
          <tbody>
            <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
              <td className="py-2 ">Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Center</td>
              <td>Salary</td>
              <td>Courses</td>
              <td></td>
              
              {/* <td></td> */}
            </tr>
            {
             staffs.map( (v, i) => <TableRow key={i} {...v} />)
            }
          </tbody>
        </table>
        </div>
    );
}