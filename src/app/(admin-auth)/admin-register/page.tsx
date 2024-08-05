'use client'

import { adminRegister } from "@/actions";
import { FormMessage, FormButton } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { paths } from "@/utils";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function Page() {

  const [res, action] = useFormState(adminRegister, {});
  
  return (
    <div className=" py-8">
      <h2 className=" heading">Admin Register</h2>
      <form action={action}
        className="flex flex-col gap-3 py-3"
      >

        <FormMessage res={res} />
        {loginFields.map((item) => {
          return <AppInput key={item.name} {...item} error={res?.fieldErrors?.[item.name]} />;
        })}
        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-primary r-font-semibold text-sm"
          >
            Forgot Password?
          </Link>
        </div>
        <FormButton className="btn-primary">Register</FormButton>
        <div className=" flex gap-2">
          <p>already have an account</p>
          <Link
            href={paths.adminLogin}
            className="text-primary font-semibold"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

const loginFields: AppInputProps[] = [
    {
        name: "fullname",
        title: "Fullname",
        type: "fullname",
        placeholder: "Enter your fullname",
      },
    
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
  {
    name: "confirmPassword",
    title: "confirm Password",
    type: "password",
    placeholder: "Confirm your Password",
  },
  {
    name: "accessCode",
    title: "Access code",
    // type: "number",
    placeholder: "Enter access code",
  },
];
