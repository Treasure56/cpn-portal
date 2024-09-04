'use client'

import { changePassword } from "@/actions";
import { FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";

export default function Page() {
  const [res, action] = useFormState(changePassword, {});
  const [key, setKey] = useState("");
  useEffect(() => {
    if (res.success) setKey((old) => old + "-");
  }, [res]);

  
  return (
    <div className=" py-8 max-w-[400px] mx-auto">
      <h2 className=" heading">Change Password</h2>
      <form action={action} key={key}
        className="flex flex-col gap-3 py-3"
      >
        <FormMessage res={res}/>
        {loginFields.map((item) => {
          return <AppInput key={item.name} {...item}  error={res.fieldErrors?.[item.name]}/>;
        })}
        <div className="flex justify-end">
        </div>
        <FormButton className="btn-primary">Update</FormButton>
      </form>
    </div>
  );
}

const loginFields: AppInputProps[] = [
  {
    name: "currentPassword",
    title: "Current Password",
    type: "password",
    placeholder: "Enter your current Password",
  },
  {
    name: "newPassword",
    title: "New Password",
    type: "password",
    placeholder: "Enter your new Password",
  },
  {
    name: "confirm_password",
    title: "Confirm Password",
    type: "password",
    placeholder: " confirm Password",
  },
];
