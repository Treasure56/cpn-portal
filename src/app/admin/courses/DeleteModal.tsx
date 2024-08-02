"use client"

import { FormButton, FormMessage } from "@/components/form";
import { Courses, Students } from "@/types";
import { AlertDialog } from "@radix-ui/themes";
import { IoClose } from "react-icons/io5";

export default function DeleteModal({children, courses: students}:{children: React.ReactNode, courses:Courses}) {

  
 
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
            <AlertDialog.Content style={{width: "280px"}}>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold"></h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form className="flex flex-col gap-4">
                    <h3>Are you sure you want to delete <span className="font-semibold"> {students.title}</span>?</h3>
                    <FormMessage res={{}} />
              
                <FormButton className="btn-primary">Yes, Delete</FormButton>
                </form>
               </div>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}



