"use client"

import { FormButton, FormMessage } from "@/components/form";
import { Students } from "@/types";
import { Dialog } from "@radix-ui/themes";
import { IoClose } from "react-icons/io5";

export default function DeleteModal({children, students}:{children: React.ReactNode, students:Students}) {

  
 
    return (
        <Dialog.Root>
            <Dialog.Trigger>{children}</Dialog.Trigger>
            <Dialog.Content style={{width: "280px"}}>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold"></h4>
                    <Dialog.Close>
                        <IoClose />
                    </Dialog.Close>
                </div>
                <form className="flex flex-col gap-4">
                    <h3>Are you sure you want to delete <span className="font-semibold"> {students.fullname}</span>?</h3>
                    <FormMessage res={{}} />
              
                <FormButton className="btn-primary">Yes, Delete</FormButton>
                </form>
               </div>
            </Dialog.Content>
        </Dialog.Root>
    );
}



