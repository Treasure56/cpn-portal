'use client'

import { FormMessage, FormButton } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { paths } from "@/utils";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function Page() {
  
  return (
    <div className=" py-8">
      <h2 className=" heading">Admin Register</h2>
      <form
        className="flex flex-col gap-3 py-3"
      >
        {loginFields.map((item) => {
          return <AppInput key={item.name} {...item} />;
        })}
        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-primary r-font-semibold text-sm"
          >
            Forgot Password?
          </Link>
        </div>
        <FormButton className="btn-primary">Login</FormButton>
        <div className=" flex gap-2">
          <p>Don&apos;t have an account?</p>
          <Link
            href={paths.adminRegister}
            className="text-primary font-semibold"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

const loginFields: AppInputProps[] = [
  {
    name: "email",
    title: "Email",
    type: "email",
    placeholder: "Email Address",
  },
  {
    name: "password",
    title: "Password",
    type: "password",
    placeholder: "Enter your Password",
  },
];
