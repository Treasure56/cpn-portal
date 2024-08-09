"use client"

import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { AlertDialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function CreateStudent({children}:{children: React.ReactNode}) {
 
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
            <AlertDialog.Content>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Register New Student</h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form className="flex flex-col gap-4">
                    <FormMessage res={{}} />
                    <AppSelect name="center_id" title="Center" options={[]} />
                    <AppSelect name="course_id" title="Course" options={[]} />
                {
                    fields.map((item) => {
                        return <AppInput key={item.name} {...item} />
                    })
                }
                <FormButton className="btn-primary">Register</FormButton>
                </form>
               </div>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}



const fields:AppInputProps[] = [
{
    name: "fullname",
    title: "Full Name",
    placeholder: "Enter Full Name",   
},
{
    name: "email",
    title: "Email",
    placeholder: "Enter Email",
},
{
    name: "phone",
    title: "Phone Number", 
    placeholder: "Enter Phone Number",
},
{
    name: "student_id",
    title: "Student ID", 
    placeholder: "Enter Student ID",
},
{
    name: "reg_date",
    title: "Registration Date", 
    placeholder: "Enter Registration Date",
    type: "date"
},
{
    name: "birth_date",
    title: "Birth Date", 
    placeholder: "Enter Birth Date",
    type: "date"
}
]