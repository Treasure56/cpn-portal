"use client";

import { addPayment } from "@/actions";
import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { PaymentPlanDetailed } from "@/types";
import { AlertDialog } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function NewPayment({
  children,
  plan,
}: {
  children: React.ReactNode;
  plan: PaymentPlanDetailed;
}) {
    const params = useParams();
  const fields: AppInputProps[] = [
    {
      name: "amount",
      title: "Amount",
      placeholder: "Enter Amount",
      value: plan.estimate.toString(),
      icon: <del>N</del>,
    },
    {
      name: "payment_date",
      title: "Payment Date",
      type: "date",
      placeholder: "Enter Paid Date",
    },
    {
      name: "disclaimer",
      title: "Disclaimer",
      placeholder: "Enter Disclaimer",
      textarea: true,
      value: "All funds deposited are not refundable",
    },
    {
      name: "message",
      title: "Message",
      placeholder: "Enter Message",
      textarea: true,
    },
  ];
  const [res, action] = useFormState(addPayment, {});
  const [key, setKey] = useState("");
  useEffect(() => {
    if (res.success) setKey((old) => old + "-");
  }, [res]);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
      <AlertDialog.Content>
        <div>
          <div className="flex justify-between pb-6">
            <h4 className="font-semibold">Add New Payment</h4>
            <AlertDialog.Cancel>
              <IoClose />
            </AlertDialog.Cancel>
          </div>
          <form className="flex flex-col gap-4" action={action} key={key}>
            <FormMessage res={res} />
            <input type="hidden" name="payment_plan_id" value={plan._id} />
            <input type="hidden" name="student_id" value={params.slug} />
            {fields.map((item) => {
              return (
                <AppInput
                  key={item.name}
                  {...item}
                  error={res.fieldErrors?.[item.name]}
                />
              );
            })}
            <FormButton className="btn-primary">Submit</FormButton>
          </form>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
