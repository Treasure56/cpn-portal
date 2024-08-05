'use client'

import { login } from "@/actions";
import { FormMessage, FormButton } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { paths } from "@/utils";
import { error } from "console";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function Page() {
  const [res, action] = useFormState(login, {});
  
  return (
    <div className=" py-8">
      <h2 className=" heading">Login Admin</h2>
      <form action={action}
        className="flex flex-col gap-3 py-3"
      >
        <FormMessage res={res} />
        {loginFields.map((item) => {
          return <AppInput key={item.name} {...item} error={res?.fieldErrors?.[item.name]}  />;
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
