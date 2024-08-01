"use client"

import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { Dialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function CreateStudent({children}:{children: React.ReactNode}) {
 
    return (
        <Dialog.Root>
            <Dialog.Trigger>{children}</Dialog.Trigger>
            <Dialog.Content>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Add New Course</h4>
                    <Dialog.Close>
                        <IoClose />
                    </Dialog.Close>
                </div>
                <form className="flex flex-col gap-4">
                    <FormMessage res={{}} />
                    
                {
                    fields.map((item) => {
                        return <AppInput key={item.name} {...item} />
                    })
                }
                <FormButton className="btn-primary">Add</FormButton>
                </form>
               </div>
            </Dialog.Content>
        </Dialog.Root>
    );
}



const fields:AppInputProps[] = [
{
    name: "title",
    title: " Course Title",
    placeholder: "Enter Course Title",   
},
{
    name: "duration",
    title: "Course Duration",
    placeholder: "Enter Course Duration",
},
{
    name: "amount",
    title: "Course Amount", 
    placeholder: "Enter Course Amount",
},
]