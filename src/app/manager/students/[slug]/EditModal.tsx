"use client";

import { addPayment, editPayment } from "@/actions";
import { FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { PaymentsDetailedlus } from "@/types";
import { AlertDialog } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function EditPayment({
  children,
  payment,
}: {
  children: React.ReactNode;
  payment: PaymentsDetailedlus;
}) {
    const params = useParams();
  const fields: AppInputProps[] = [
    {
      name: "amount",
      title: "Amount",
      placeholder: "Enter Amount",
      value: payment.amount.toString(),
      icon: <del>N</del>,
    },
    {
      name: "payment_date",
      title: "Payment Date",
      type: "date",
      placeholder: "Enter Paid Date",
      value: payment.payment_date
    },
    {
      name: "disclaimer",
      title: "Disclaimer",
      placeholder: "Enter Disclaimer",
      textarea: true,
      value: payment.disclaimer,
    },
    {
      name: "message",
      title: "Message",
      placeholder: "Enter Message",
      textarea: true,
      value: payment.message
    },
  ];
  const [res, action] = useFormState(editPayment, {});
  const [key, setKey] = useState("");
  useEffect(() => {
    if (res.success) setKey((old) => old + "-");
  }, [res]);

  console.log({ payment });
  

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
      <AlertDialog.Content>
        <div>
          <div className="flex justify-between pb-6">
            <h4 className="font-semibold">Edit Payment</h4>
            <AlertDialog.Cancel>
              <IoClose />
            </AlertDialog.Cancel>
          </div>
          <form className="flex flex-col gap-4" action={action} key={key}>
            <FormMessage res={res} />
            {/* <input type="hidden" name="payment_plan_id" value={"679ce7cd0a00f9fa1f295b67"} /> */}
            <input type="hidden" name="payment_id" value={payment._id} />
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
