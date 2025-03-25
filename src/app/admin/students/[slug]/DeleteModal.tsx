"use client";

import { deletePayment } from "@/actions";
import { FormButton, FormMessage } from "@/components/form";
import { PaymentsDetailedlus } from "@/types";
import { Dialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function DeleteModal({ children, payments }: { children: React.ReactNode; payments: PaymentsDetailedlus }) {
   const student = payments.payment_plan_id[0].user_id;

    const [res, action] = useFormState(deletePayment, {});
     const [open, setOpen] = useState(false);
     useEffect(() => {
       if (res.success) setOpen(false);
     }, [res]);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>{children}</Dialog.Trigger>
            <Dialog.Content style={{ width: "280px" }}>
                <div>
                    <div className="flex justify-between pb-6">
                        <h4 className="font-semibold"></h4>
                        <Dialog.Close>
                            <IoClose />
                        </Dialog.Close>
                    </div>
                    <form className="flex flex-col gap-4" action={action}>
                        <h3>
                            Are you sure you want to delete{" "}
                            <span className="font-semibold">{!student ? "----" : student.fullname}&apos;s payment</span>?
                        </h3>
                        <FormMessage res={res} />
                        <FormButton className="btn-primary">Yes, Delete</FormButton>
                        <input type="hidden" name="paymentId" value={payments._id} />
                    </form>
                </div>
            </Dialog.Content>
        </Dialog.Root>
    );
}