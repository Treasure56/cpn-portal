"use client"

import { editManager } from "@/actions";
import { editCourse } from "@/actions/admin/editCourse";
import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { Courses, Manager, Staff, Students } from "@/types";
import { AlertDialog } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
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
            title: "Course Duration (months)",
            placeholder: "Enter Course Duration",
            value: courses.duration
        },
        {
            name: "amount",
            title: "Course Amount", 
            placeholder: "Enter Course Amount",
            value: courses.amount,
            type: "number"
        },
        ]

        const [res, action] = useFormState(editCourse,{})
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
                    <h4 className="font-semibold">Edit Course</h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form className="flex flex-col gap-4" action={action}>
                    <FormMessage res={res} />
                {
                    fields.map((item) => {

                        return <AppInput key={item.name} {...item} />
                    })
                }
                 <input type="hidden" name="courseId" defaultValue={courses._id} />
                <FormButton className="btn-primary">Update</FormButton>
                </form>
               </div>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}



