"use client"

import { createManager } from "@/actions";
import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useCenters, useChangeSearchParams } from "@/hooks";
import { AlertDialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function CreateManager({children}:{children: React.ReactNode}) {
 
    const [res, action] = useFormState(createManager, {});
    const {centers} = useCenters();
    const [key, setKey] = useState('');
    useEffect(() => {
        if(res.success) setKey(old=>old+"-");
    }, [res])
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
            <AlertDialog.Content>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Create New Manager</h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form key={key} className="flex flex-col gap-4" action={action}>
                    <FormMessage res={res} />
                    <AppSelect name="centerId" title="Center"
                     error={res?.fieldErrors?.['centerId']}
                     readonly={!centers} options={!centers ? ['loading...'] : centers.map(item => ({title: item.name, value: item._id}))} />
                {
                    fields.map((item) => {
                        return <AppInput key={item.name} {...item}  error={res?.fieldErrors?.[item.name]}/>
                    })
                }
                <FormButton className="btn-primary">Create</FormButton>
                </form>
               </div>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}



const fields:AppInputProps[] = [
{
    name: "fullname",
    title: "Full Name",
    placeholder: "Enter Full Name",   
},
{
    name: "email",
    title: "Email",
    placeholder: "Enter Email",
},
{
    name: "phone",
    title: "Phone Number", 
    placeholder: "Enter Phone Number",
}
]