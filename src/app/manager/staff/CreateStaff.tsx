"use client"

import { createStaff } from "@/actions";
import { CoursePicker } from "@/components/admin";
import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { Staff } from "@/types";
import { AlertDialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function CreateStaff({children}:{children: React.ReactNode}) {
    const [res, action] = useFormState(createStaff, {});
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
                    <h4 className="font-semibold">Create New Staff</h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form className="flex flex-col gap-4" action={action} key={key}>
                    <FormMessage res={res} />
                    <CoursePicker />
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
},
{
    name: "salary",
    title: "salary", 
    placeholder: "Enter salary",
    type: "number"
}
]