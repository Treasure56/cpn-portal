import { formatDate, formatNumber } from "@/functions/helpers";
import { PaymentPlan, PaymentPlanDetailed, StudentDetailed, Students } from "@/types";
import NewPayment from "./NewPayment";
import { fetchBalance, fetchManagerPaymentPlan } from "@/actions";
import CreateInvoice from "../CreateInvoice";

export default async function CoursCard({student, props}: {student: StudentDetailed, props: PaymentPlanDetailed}) {
  const {
    _id,
    course_id,
    amount,
    reg_date,
    installments,
    estimate,
    last_payment_date,
    next_payment_date,
    createdAt,
    updatedAt,
    per_installment,
    user_id,
  } = props;
  let [paid, pending] = [0, 0]
  let paymentPlanNew = await fetchManagerPaymentPlan({id: _id})
  if(paymentPlanNew !== "error" && paymentPlanNew){
    paid = paymentPlanNew.paid !,
    pending = paymentPlanNew.pending !
  }

  console.log(formatNumber, paid);

  return (
    <div className="bg-neutral-200 flex flex-col justify-between p-8 rounded-xl text-neutral-700">
      <div className="flex flex-col pb-4">
        <p className="font-[500] text-2xl">{course_id?.title}</p>
        <p>{formatDate(reg_date)}</p>
      </div>
      <div className="grid gap-4 grid-cols-2 w-full justify-between mb-2">
        <NewPayment plan={props}>
          <button className="btn-primary !py-1">Add payment</button>
        </NewPayment>
        <CreateInvoice student={student} index={0}>
          <button className="btn-dark !py-1">Create invoice</button>
        </CreateInvoice>
        <div className="flex flex-col">
          <p>Total Fee:</p>
          <p className="font-[500] text-neutral-900">{formatNumber(amount, true)}</p>
        </div>

        <div/>
        <div className="flex flex-col">
          <p>Paid:</p>
          <p className="font-[500] text-neutral-900">{formatNumber(paid ?? 0)?? "--"}</p>
        </div>
        <div className="flex flex-col">
          <p>Pending:</p>
          <p className="font-[500] text-neutral-900">{formatNumber(pending ?? 0)?? "--"}</p>
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
