"use client"

import { deleteCourse } from "@/actions/admin/deleteCourse";
import { FormButton, FormMessage } from "@/components/form";
import { Courses } from "@/types";
import { AlertDialog } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function DeleteModal({children, courses: course}:{children: React.ReactNode, courses:Courses}) {

    const [res, action] = useFormState(deleteCourse, {});
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if(res.success) setOpen(false);
    }, [res])
  
 
    return (
        <AlertDialog.Root open={open} onOpenChange={setOpen}>
            <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
            <AlertDialog.Content style={{width: "280px"}}>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold"></h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form className="flex flex-col gap-4" action={action}>
                    <h3>Are you sure you want to delete <span className="font-semibold"> {course.title}</span>?</h3>
                    <FormMessage res={res} />
                    <input type="hidden" name="courseId" defaultValue={course._id} />
              
                <FormButton className="btn-primary">Yes, Delete</FormButton>
                </form>
               </div>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}



