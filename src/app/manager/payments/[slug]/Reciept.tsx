import { PageTitle } from "@/components/admin";
import { AppLogo } from "@/components/navbar";
import PdfScript from "@/components/PdfScript";
import { formatDate, formatNumber } from "@/functions/helpers";
import { PaymentsDetailedlus } from "@/types";
import { centerDummy, studentDummy } from "@/utils/dummy";

export default async function Reciept({
  _id,
  amount,
  createdAt,
  payment_date: paid_at,
  payment_plan_id: plan_id,
  user_id: student_id,
  voucher_number,
  disclaimer,
}: PaymentsDetailedlus) {
  const student = plan_id[0].user_id;
  const center = plan_id[0].user_id.center;

  return (
    <>
    <PdfScript title={`receipt_${voucher_number}_${student.fullname}`} />
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
            <p>{center.code}</p>
            <p>{center.location}</p>
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
              <p className="text-neutral-500">{voucher_number}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">Transaction Date:</p>
              <p className="text-neutral-500">{formatDate(paid_at)}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">CreatedAt:</p>
              <p className="text-neutral-500"> {formatDate(createdAt)}</p>
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
            <p className="col-span-4 ">#{_id}</p>
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
          <p className="text-sm">{disclaimer}</p>
        </div>
      </div>
    </>
  );
}
