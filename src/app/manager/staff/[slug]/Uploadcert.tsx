"use client";
import { uploadCert } from "@/actions/manager/uploadcert";
import { uploadProfile } from "@/actions/manager/uploadProfile";
import { AppInput, FormButton, FormMessage } from "@/components/form";
import { AlertDialog } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function UploadCert({
  children,
}: {
  children: React.ReactNode;
}) {
  const { slug: staffId } = useParams();
  const [res, action] = useFormState(uploadCert, {});
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
      <AlertDialog.Content>
        <div>
          <div className="flex justify-between  pb-6">
            <h1 className="font-semibold text-2xl">Upload Certificate</h1>
            <AlertDialog.Cancel>
              <IoClose />
            </AlertDialog.Cancel>
          </div>
          <div className="flex flex-col items-center">
            <form
              action={action}
              className="grid grid-cols-1 gap-2 mt-4 w-full items-center"
            >
              <FormMessage res={res} />
              <AppInput
                placeholder="Enter certificate name"
                name="name"
                title="Certificate Name"
              />
              {/* </div> */}
              <input className="" name="certificate" type="file" id="profile" />
              <FormButton className="btn-primary w-full px-4">Save</FormButton>
              <input type="hidden" name="staffId" value={staffId} />
            </form>
          </div>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
