'use client'

import { FormButton } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";

export default function Page() {
  
  return (
    <div className=" py-8">
      <h2 className=" heading">Change Password</h2>
      <form
        className="flex flex-col gap-3 py-3"
      >
        {loginFields.map((item) => {
          return <AppInput key={item.name} {...item} />;
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
    name: "oldPassword",
    title: "Old Password",
    type: "password",
    placeholder: "Enter your Password",
  },
  {
    name: "newPassword",
    title: "New Password",
    type: "password",
    placeholder: "Enter your new Password",
  },
];
