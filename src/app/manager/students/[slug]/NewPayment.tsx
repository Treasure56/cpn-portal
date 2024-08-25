"use client"

import { addPayment } from "@/actions";
import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { AlertDialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function NewPayment({children}:{children: React.ReactNode}) {
    const [res, action] = useFormState(addPayment, {});
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
                    <h4 className="font-semibold">Add New Payment</h4>
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <form className="flex flex-col gap-4" action={action} key={key}>
                    <FormMessage res={res}/>
                    <AppSelect name="course_id" title="Course" options={[]} />
                {
                    fields.map((item) => {
                        return <AppInput key={item.name} {...item}  error={res.fieldErrors?.[item.name]}/>
                    })
                }
                <FormButton className="btn-primary">Submit</FormButton>
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
    },
    {
        name: "paid_at",
        title: "Paid Date",
        placeholder: "Enter Paid Date",
    },
    {
        name: "plan_id",
        title: "plan ID",
        placeholder: "Enter plan ID",
    },
    
    
]

