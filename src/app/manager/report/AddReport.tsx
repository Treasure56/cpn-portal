"use client";

import { createCenter } from "@/actions";
import { FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { AlertDialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function AddReport({ children }: { children: React.ReactNode }) {
  const [res, action] = useFormState(createCenter, {});
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
            <h4 className="font-semibold">Create New Center</h4>
            <AlertDialog.Cancel>
              <IoClose />
            </AlertDialog.Cancel>
          </div>
          <form key={key} className="flex flex-col gap-4" action={action}>
            <FormMessage res={res} />
            {fields.map((item) => {
              return (
                <AppInput
                  key={item.name}
                  {...item}
                  error={res?.fieldErrors?.[item.name]}
                />
              );
            })}
            <FormButton className="btn-primary">Create</FormButton>
          </form>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

const fields: AppInputProps[] = [
  {
    name: "name",
    title: "Center Name",
    placeholder: "Enter Center Name",
  },
  {
    name: "code",
    title: "Center Code",
    placeholder: "Enter Center Code",
  },
  {
    name: "location",
    title: "Center Location",
    placeholder: "Enter Center Location",
  },
];
