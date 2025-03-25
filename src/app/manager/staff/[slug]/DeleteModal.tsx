"use client";

import { deleteCertificate } from "@/actions";
import { FormButton, FormMessage } from "@/components/form";
import { StaffCertificate, Students } from "@/types";
import { Dialog } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function DeleteModal({
  children,
  certificate,
}: {
  children: React.ReactNode;
  certificate: StaffCertificate;
}) {
  const { slug } = useParams();
  const [res, action] = useFormState(deleteCertificate, {});
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
              <span className="font-semibold"> {certificate.name}</span>?
            </h3>
            <FormMessage res={res} />
            <input type="hidden" name="certificateId" value={certificate._id} />
            <input type="hidden" name="staffId" value={slug} />

            <FormButton className="btn-primary">Yes, Delete</FormButton>
          </form>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
