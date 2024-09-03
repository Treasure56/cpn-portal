"use client"

import { editManager } from "@/actions";
import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useCenters, useChangeSearchParams } from "@/hooks";
import { Manager } from "@/types";
import { AlertDialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function EditManager({children, manager}:{children: React.ReactNode, manager:Manager}) {

    const fields:AppInputProps[] = [
        {
            name: "fullname",
            title: "Full Name",
            placeholder: "Enter Full Name", 
            value: manager.fullname 
        },
        {
            name: "email",
            title: "Email",
            placeholder: "Enter Email",
            value: manager.email

        },
        {
            name: "phone",
            title: "Phone Number", 
            placeholder: "Enter Phone Number",
            type: "number",
            value: manager.phone
        }
        ]

        const {centers} = useCenters();
        const [res, action] = useFormState(editManager,{})
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
                    <h4 className="font-semibold">Edit Manager</h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form className="flex flex-col gap-4" action={action}>
                    <FormMessage res={res} />
                    <AppSelect name="center" title="Center"
                     error={res?.fieldErrors?.['centerId']}
                     value={manager.center._id}
                     readonly={!centers} options={!centers ? ['loading...'] : centers.map(item => ({title: item.name, value: item._id}))} />
                {
                    fields.map((item) => {

                        return <AppInput key={item.name} {...item}  error={res?.fieldErrors?.[item.name]} />
                    })
                }
                <input type="hidden" name="managerId" defaultValue={manager._id} />
                <FormButton className="btn-primary">Update</FormButton>
                </form>
               </div>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}



