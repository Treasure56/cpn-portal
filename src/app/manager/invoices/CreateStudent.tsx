"use client"

import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { AlertDialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function CreateStudent({children}:{children: React.ReactNode}) {
 
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
            <AlertDialog.Content>
               <div> 
                <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Create New Invoice</h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form className="flex flex-col gap-4">
                    <FormMessage res={{}} />
                {
                    fields.map((item) => {
                        return <AppInput key={item.name} {...item} />
                    })
                }
                <FormButton className="btn-primary">Register</FormButton>
                </form>
               </div>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}



const fields:AppInputProps[] = [
{
    name: "student_id",
    title: "Student ID",
    placeholder: "Enter Student ID",   
},
{
    name: "amount",
    title: "Amount",
    placeholder: "Enter Amount",
    type: "number"
},
{
    name: "date",
    title: "Date", 
    placeholder: "Enter Date",
    type: "date"
},
{
    name: "due date",
    title: "Due Date", 
    placeholder: "Enter Due Date",
    type: "date"
},
{
    name: "message",
    title: "Message", 
    placeholder: "Enter Message",
    textarea: true
},
{
    name: "disclaimer",
    title: "Disclaimer", 
    placeholder: "Enter Disclaimer",
    textarea: true,
    value:"All funds deposited are not refundable"
},

]
