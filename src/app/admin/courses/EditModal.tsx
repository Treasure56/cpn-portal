"use client"

import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { Courses, Manager, Staff, Students } from "@/types";
import { Dialog } from "@radix-ui/themes";
import { IoClose } from "react-icons/io5";

export default function EditModall({children, courses}:{children: React.ReactNode, courses:Courses}) {

    const fields:AppInputProps[] = [
        {
            name: "title",
            title: " Course Title",
            placeholder: "Enter Course Title", 
            value: courses.title  
        },
        {
            name: "duration",
            title: "Course Duration",
            placeholder: "Enter Course Duration",
            value: courses.duration
        },
        {
            name: "amount",
            title: "Course Amount", 
            placeholder: "Enter Course Amount",
            value: courses.amount
        },
        ]
 
    return (
        <Dialog.Root>
            <Dialog.Trigger>{children}</Dialog.Trigger>
            <Dialog.Content>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Edit Course</h4>
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



