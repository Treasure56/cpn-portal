import TableRow from "./TableRow";
import { adminFetchSingleStudentPayment } from "@/actions";

export default async function Table({query, studentId}:{query: string; studentId: string}) {
  const payment = await adminFetchSingleStudentPayment(studentId);
  if(!payment || payment == "error") return <div className="info">error fetching payments</div>;
    return (
        <div className="flex flex-col gap-2">
             <div className="flex justify-between">
                <h3 className=" text-lg font-[500]">Payments</h3>
           {/* <NewPayment>
           <button className="btn-dark !py-1.5 !px-5 !font-normal !text-sm w-fit flex justify-end">
            Add Payment +
          </button>
           </NewPayment> */}
            </div>

            <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
          <tbody>
            <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
              {/* <td className="py-2 ">Student</td> */}
              {/* <td></td> */}
              <td>Amount</td>
               {/* <td></td> */}
              {/* <td>Student ID</td> */}
              <td>Course</td>
              <td>Payment Date</td>
              <td></td>
            </tr>
            {
            payment.map( (v, i) => <TableRow key={i} {...v} />)
            }
          </tbody>
        </table>
        </div>
    );
}

