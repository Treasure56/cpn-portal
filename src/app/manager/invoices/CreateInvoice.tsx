"use client"

import { createInvoice } from "@/actions";
import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { AlertDialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function CreateInvoice({children}:{children: React.ReactNode}) {
    const [res, action] = useFormState(createInvoice, {});
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
                    <h4 className="font-semibold">Create New Invoice</h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form className="flex flex-col gap-4" action={action} key={key}>
                    <FormMessage res={res} />
                {
                    fields.map((item) => {
                        return <AppInput key={item.name} {...item} error={res.fieldErrors?.[item.name]} />
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
    name: "payment_plan_id",
    title: "payment plan ID",
    placeholder: "payment plan ID",   
},
{
    name: "amount",
    title: "Amount",
    placeholder: "Enter Amount",
    type: "number"
},
{
    name: "due date",
    title: "Due Date", 
    placeholder: "Enter Due Date",
    type: "date"
},
{
    name: "disclaimer",
    title: "Disclaimer", 
    placeholder: "Enter Disclaimer",
    textarea: true,
    value:"All funds deposited are not refundable"
},

]
