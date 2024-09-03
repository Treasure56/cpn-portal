"use client";

import { createInvoice } from "@/actions";
import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { PaymentPlanDetailed, StudentDetailed } from "@/types";
import { AlertDialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function CreateInvoice({
  children,
  student,
  index,
}: {
  children: React.ReactNode;
  student: StudentDetailed;
  index: number;
}) {
  const fields: AppInputProps[] = [
    {
      name: "",
      title: "Student",
      value: student.fullname,
      placeholder: "",
      inputProps: {
        disabled: true,
      },
    },
    {
      name: "",
      title: "Course",
      value: student.plan[index].course_id?.title || "",
      placeholder: "",
      inputProps: {
        disabled: true,
      },
    },
    {
      name: "amount",
      title: "Amount",
      value: student.plan[index].estimate.toString(),
      placeholder: "Enter Amount",
      type: "number",
      icon: <del>N</del>
    },
    {
      name: "due_date",
      title: "Due Date",
      placeholder: "Enter Due Date",
      type: "date",
      value: student.plan[index].next_payment_date,
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
      value: "",
    },
  ];

  const [res, action] = useFormState(createInvoice, {});
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
            <h4 className="font-semibold">Create New Invoice</h4>
            <AlertDialog.Cancel>
              <IoClose />
            </AlertDialog.Cancel>
          </div>
          <form className="flex flex-col gap-4" action={action} key={key}>
            <FormMessage res={res} />
            <div className="grid grid-cols-2 gap-4">
              {fields.map((item) => {
                return (
                  <div key={item.name} className={item.textarea ? 'col-span-full' : 'col-span-1'}>
                    <AppInput {...item} error={res.fieldErrors?.[item.name]} />
                  </div>
                );
              })}
            </div>
            <FormButton className="btn-primary">Create invoice</FormButton>
            <input
              type="hidden"
              name="payment_plan_id"
              value={student.plan[index]._id}
            />
            <input type="hidden" name="studentId" value={student._id} />
          </form>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
