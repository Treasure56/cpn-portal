"use client"

import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { Manager, Staff, Students } from "@/types";
import { Dialog } from "@radix-ui/themes";
import { IoClose } from "react-icons/io5";

export default function EditModall({children, students}:{children: React.ReactNode, students:Students}) {

    const fields:AppInputProps[] = [
        {
            name: "full_name",
            title: "Full Name",
            placeholder: "Enter Full Name", 
            value: students.full_name 
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
        <Dialog.Root>
            <Dialog.Trigger>{children}</Dialog.Trigger>
            <Dialog.Content>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Edit Student</h4>
                    <Dialog.Close>
                        <IoClose />
                    </Dialog.Close>
                </div>
                <form className="flex flex-col gap-4">
                    <FormMessage res={{}} />
                    <AppSelect name="center_id" title="Center" options={[]} />
                {
                    fields.map((item) => {

                        return <AppInput key={item.name} {...item} />
                    })
                }
                <FormButton className="btn-primary">Update</FormButton>
                </form>
               </div>
            </Dialog.Content>
        </Dialog.Root>
    );
}



