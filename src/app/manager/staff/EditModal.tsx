"use client";

import { editStaff } from "@/actions";
import { CoursePicker } from "@/components/admin";
import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { Staff } from "@/types";
import { validators } from "@/utils";
import { AlertDialog } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";
import { z } from "zod";

export default function EditModall({
  children,
  staff,
}: {
  children: React.ReactNode;
  staff: Staff;
}) {
  const fields: AppInputProps[] = [
    {
      name: "fullname",
      title: "Full Name",
      placeholder: "Enter Full Name",
      value: staff.fullname,
    },
    {
      name: "email",
      title: "Email",
      placeholder: "Enter Email",
      value: staff.email,
    },
    {
      name: "phone",
      title: "Phone Number",
      placeholder: "Enter Phone Number",
      value: staff.phone,
    },
    {
        name: "salary",
        title: "salary", 
        placeholder: "Enter salary",
        type: "number",
        value: String(staff.salary),
    }
  ];

  const [res, action] = useFormState(editStaff, {});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (res.success) setOpen(false);
  }, [res]);

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
      <AlertDialog.Content>
        <div>
          <div className="flex justify-between pb-6">
            <h4 className="font-semibold">Edit Staff</h4>
            <AlertDialog.Cancel>
              <IoClose />
            </AlertDialog.Cancel>
          </div>
          <form className="flex flex-col gap-4" action={action}>
            <FormMessage res={res} />
            <CoursePicker value={staff.courses} />
            {fields.map((item) => {
              return <AppInput key={item.name} {...item} />;
            })}
            <input type="hidden" name="staffId" defaultValue={staff._id} />
            <FormButton className="btn-primary">Update</FormButton>
          </form>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
