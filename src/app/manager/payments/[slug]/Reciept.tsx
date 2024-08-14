import { PageTitle } from "@/components/admin";
import { AppLogo } from "@/components/navbar";
import PdfScript from "@/components/PdfScript";
import { formatNumber } from "@/functions/helpers";
import { Payments } from "@/types";
import { centerDummy, studentDummy } from "@/utils/dummy";

export default async function Reciept({
  _id,
  amount,
  createdAt,
  paid_at,
  plan_id,
  student_id,
  voucner_number,
}: Payments) {
  const student = studentDummy;
  const center = centerDummy;

  return (
    <>
    <PdfScript title={`receipt_${voucner_number}_${student.fullname}`} />
      <div
        id="html-content"
        className=" flex flex-col gap-3 aspect-[3/4] bg-light p-20 w-[794px] "
      >
        <h3 className="border-b-nuetral-100 border-b py-10 font-[600]">
          Reciept
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
            <p className="font-[500]"> Payment Details</p>
            <p> Payment From:</p>
            <p className=" uppercase font-[500]">{student.fullname}</p>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">Voucher No:</p>
              <p className="text-neutral-500">{voucner_number}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">Transaction Date:</p>
              <p className="text-neutral-500">{paid_at}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">CreatedAt:</p>
              <p className="text-neutral-500"> {createdAt}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">Deposit To:</p>
              <p className="text-neutral-500">{center.name}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">Transaction Charge:</p>
              <p className="text-neutral-500">{"N0.00"}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-10">
          <div className="grid grid-cols-8 bg-light border p-4 font-[500]">
            <p className="col-span-2">SI.</p>
            <p className="col-span-4">Invoice ID</p>
            <p className="col-span-2">Amount</p>
          </div>
          <div className="grid grid-cols-8 gap-2 border-b-nuetral-100 border-b py-2 ">
            <p className="col-span-2 ">#1</p>
            <p className="col-span-4 ">294</p>
            <div className="flex flex-col col-span-2">
              <p className="">Dr</p>
              <p className="text-neutral-500">{formatNumber(amount, true)}</p>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-2 border-b-nuetral-100 border-b py-2 ">
            <p className="col-span-2"></p>
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
