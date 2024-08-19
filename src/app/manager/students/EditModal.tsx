"use client"


import { editStudent } from "@/actions";
import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { Manager, Staff, Students } from "@/types";
import { AlertDialog } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function EditModall({children, students}:{children: React.ReactNode, students:Students}) {

    const fields:AppInputProps[] = [
        {
            name: "fullname",
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
            name: "birth_date",
            title: "Birth Date", 
            placeholder: "Enter Birth Date",
            type: "date",
            value: students.birth_date
        }
        ]

        const [res, action] = useFormState(editStudent,{})
        const [open, setOpen] = useState(false);
        useEffect(() => {
            if(res.success) setOpen(false);
        }, [res])
 
    return (
        <AlertDialog.Root open={open} onOpenChange={setOpen}>
            <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
            <AlertDialog.Content>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Edit Student</h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form className="flex flex-col gap-4" action={action}>
                    <FormMessage res={{}} />
                {
                    fields.map((item) => {

                        return <AppInput key={item.name} {...item}  error={res?.fieldErrors?.[item.name]}/>
                    })
                }
                <input type="hidden"  name="studentId" defaultValue={students._id}/>
                <FormButton className="btn-primary">Update</FormButton>
                </form>
               </div>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}



