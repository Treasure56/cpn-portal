"use client"

import { FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { Dialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function CreateCenter({children}:{children: React.ReactNode}) {
 
    return (
        <Dialog.Root>
            <Dialog.Trigger>{children}</Dialog.Trigger>
            <Dialog.Content>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Create New Center</h4>
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
                <FormButton className="btn-primary">Create</FormButton>
                </form>
               </div>
            </Dialog.Content>
        </Dialog.Root>
    );
}



const fields:AppInputProps[] = [
{
    name: "name",
    title: "Center Name",
    placeholder: "Enter Center Name",   
},
{
    name: "code",
    title: "Center Code",
    placeholder: "Enter Center Code",
},
{
    name: "location",
    title: "Center Location",
    placeholder: "Enter Center Location",
}
]