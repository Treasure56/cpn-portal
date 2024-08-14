import { formatDate, formatNumber } from "@/functions/helpers";
import { PaymentPlan, Students } from "@/types";

export default function CoursCard({
  _id,
  course_id,
  amount,
  reg_date,
  installments,
  estimate,
  last_payment_date,
  next_payment_date,
}: PaymentPlan) {
  return (
    <div className="bg-neutral-200 flex flex-col justify-between p-8 rounded-xl text-neutral-700">
      <div className="flex flex-col pb-6">
        <p className="font-[500] text-2xl">{course_id}</p>
        <p>{reg_date}</p>
      </div>
      <div className="grid gap-4 grid-cols-2 w-full justify-between mb-2">
        <div className="flex flex-col">
          <p>Total Fee:</p>
          <p className="font-[500] text-neutral-900">{formatNumber(amount)}</p>
        </div>

        <div className="flex flex-col">
          <p>Paid:</p>
          <p className="font-[500] text-neutral-900">100, 000</p>
        </div>
        <div className="flex flex-col">
          <p>Insallments:</p>
          <p className="font-[500] text-neutral-900">{installments}</p>
        </div>

        <div className="flex flex-col">
          <p>Per installment:</p>
          <p className="font-[500] text-neutral-900">
            {formatNumber(estimate, true)}
          </p>
        </div>
        <div className="flex flex-col">
          <p>last payment:</p>
          <p className="font-[500] text-neutral-900">
            {formatDate(last_payment_date)}
          </p>
        </div>

        <div className="flex flex-col">
          <p>next paymet:</p>
          <p className="font-[500] text-neutral-900">
            {formatDate(next_payment_date)}
          </p>
        </div>
      </div>
    </div>
  );
}
