"use client"

import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { Manager } from "@/types";
import { AlertDialog } from "@radix-ui/themes";
import { IoClose } from "react-icons/io5";

export default function EditManager({children, manager}:{children: React.ReactNode, manager:Manager}) {

    const fields:AppInputProps[] = [
        {
            name: "full_name",
            title: "Full Name",
            placeholder: "Enter Full Name", 
            value: manager.full_name 
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
            value: manager.phone
        }
        ]
 
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
            <AlertDialog.Content>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Edit Manager</h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form className="flex flex-col gap-4">
                    <FormMessage res={{}} />
                    <AppSelect name="center_id" title="Center" options={[]} />
                {
                    fields.map((item) => {

                        return <AppInput key={item.name} {...item} />
                    })
                }
                <FormButton className="btn-primary">Update</FormButton>
                </form>
               </div>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}



