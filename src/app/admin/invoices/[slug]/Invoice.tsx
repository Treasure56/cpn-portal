import { PageTitle } from "@/components/admin";
import { AppLogo } from "@/components/navbar";
import PdfScript from "@/components/PdfScript";
import { formatDate, formatNumber } from "@/functions/helpers";
import { centerDummy, courseDummy, studentDummy } from "@/utils/dummy";
import { Invoice } from "@/types";

export default async function InvoicePdf({
  _id,
  amount,
  createdAt,
  student_id,
  payment_plan_id,
 date,
 disclaimer,
 due_date,
 message,
 voucher_number: voucner_number

}: Invoice) {
  const student = studentDummy;
  const course = courseDummy;

  return (
    <>
    <PdfScript title={`invoice_${student.fullname}`} />
      <div
        id="html-content"
        className=" flex flex-col gap-3 aspect-[3/4] bg-light p-20 w-[794px]"
      >
        <h3 className="border-b-nuetral-100 border-b py-10 font-[600]">
          Invoice
        </h3>

        <div className="flex justify-between border-b-nuetral-100 border-b py-10">
          <AppLogo toWebsite />
          <div className="flex flex-col text-sm text-right">
            <p className="font-[500]"> Center Point</p>
            <p>Street Address 1</p>
            <p>Address Line 2</p>
            <p>City</p>
            <p>Nigeria</p>
          </div>
        </div>

        <div className="flex justify-between text-sm text-end">
          <div className="flex flex-col">
            <p className="font-[500] upercase text-start">To</p>
            <p className=" uppercase font-[500]">{student.fullname}</p>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">Voucher No:</p>
              <p className="text-neutral-500">{voucner_number}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]"> Date:</p>
              <p className="text-neutral-500">{formatDate(date)}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">Due date:</p>
              <p className="text-neutral-500"> {formatDate(due_date)}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">Transaction Charge:</p>
              <p className="text-neutral-500">{"N0.00"}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-10">
          <div className="grid grid-cols-8 bg-light border p-4 font-[500]">
            <p className="col-span-4">Course</p>
            <p className="col-span-4">Amount</p>
          </div>
          <div className="grid grid-cols-8 gap-2 border-b-nuetral-100 border-b py-2 ">
            <p className="col-span-4 ">{course.title}</p>
            <p className="col-span-4 "> {formatNumber(amount, true)}</p>
          </div>
        <div className="grid grid-cols-8 gap-2 border-b-nuetral-100 border-b py-2 ">
            <p className="col-span-4 text-right">Total: Dr.</p>
            <p className="col-span-2 text-neutral-500">
              {formatNumber(amount, true)}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-[500]">Disclaimer</p>
          <p className="text-sm">All payments are not refundable</p>
        </div>
        
      </div>
    </>
  );
}
