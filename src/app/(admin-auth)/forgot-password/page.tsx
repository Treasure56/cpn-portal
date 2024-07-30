'use client'

import { FormMessage, FormButton } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { paths } from "@/utils";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function Page() {
  
  return (
    <div className=" py-8">
      <h2 className=" heading">Forgot Password</h2>
      <form
        className="flex flex-col gap-3 py-3"
      >
        {loginFields.map((item) => {
          return <AppInput key={item.name} {...item} />;
        })}
        <FormButton className="btn-primary">Submit</FormButton>
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
        name: "code",
        title: "Code",
        type: "code",
        placeholder: "Enter code",
      },
 
];
