"use client"

import { editPayment } from "@/actions";
import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { Manager, Staff, Students } from "@/types";
import { AlertDialog } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function EditModall({children, students}:{children: React.ReactNode, students:Students}) {

      const [res, action] = useFormState(editPayment, {});
      const [key, setKey] = useState("");
      useEffect(() => {
        if (res.success) setKey((old) => old + "-");
      }, [res]);

    const fields:AppInputProps[] = [
        {
            name: "full_name",
            title: "Full Name",
            placeholder: "Enter Full Name", 
            value: students.fullname 
        },
        {
            name: "email",
            title: "Email",
            placeholder: "Enter Email",
            value: students.email
        },
        {
            name: "phone",
            title: "Phone Number", 
            placeholder: "Enter Phone Number",
            value: students.phone
        },
        {
            name: "student_id",
            title: "Student ID", 
            placeholder: "Enter Student ID",
            value: students.student_id
        },
        {
            name: "reg_date",
            title: "Registration Date", 
            placeholder: "Enter Registration Date",
            value: students.reg_date
        }
        ]
 
    return (
        <AlertDialog.Root >
            <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
            <AlertDialog.Content>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Edit Payment</h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form className="flex flex-col gap-4" action={action}>
                    <FormMessage res={res} />
                    <AppSelect name="center_id" title="Center" options={[]} />
                {
                    fields.map((item) => {

                        return <AppInput key={item.name} {...item} />
                    })
                }
                <FormButton className="btn-primary">Update</FormButton>
                </form>
               </div>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}



