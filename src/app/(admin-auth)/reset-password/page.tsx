'use client'

import { FormMessage, FormButton } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { paths } from "@/utils";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function Page() {
  
  return (
    <div className=" py-8">
      <h2 className=" heading">Reset Password</h2>
      <form
        className="flex flex-col gap-3 py-3"
      >
        {loginFields.map((item) => {
          return <AppInput key={item.name} {...item} />;
        })}
        <FormButton className="btn-primary">Reset password</FormButton>
      </form>
    </div>
  );
}

const loginFields: AppInputProps[] = [
 
  {
    name: "password",
    title: "Password",
    type: "password",
    placeholder: "Enter your Password",
  },
  {
    name: "confirm_password",
    title: "Confirm password",
    type: "password",
    placeholder: "Confirm your Password",
  },
 
];
