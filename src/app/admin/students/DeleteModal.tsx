"use client"

import { deleteStaff, deleteStudent } from "@/actions";
import { FormButton, FormMessage } from "@/components/form";
import { Students } from "@/types";
import { Dialog } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function DeleteModal({children, students}:{children: React.ReactNode, students:Students}) {

    const [res, action] = useFormState(deleteStudent, {});
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if(res.success) setOpen(false);
    }, [res])
 
    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>{children}</Dialog.Trigger>
            <Dialog.Content style={{width: "280px"}}>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold"></h4>
                    <Dialog.Close>
                        <IoClose />
                    </Dialog.Close>
                </div>
                <form className="flex flex-col gap-4" action={action}>
                    <h3>Are you sure you want to delete <span className="font-semibold"> {students.fullname}</span>?</h3>
                    <FormMessage res={res} />
                    <input type="hidden" name="studentId" value={students._id} />
              
                <FormButton className="btn-primary">Yes, Delete</FormButton>
                </form>
               </div>
            </Dialog.Content>
        </Dialog.Root>
    );
}



