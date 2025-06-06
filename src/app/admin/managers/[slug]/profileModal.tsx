"use client"

import { uploadManagerProfile } from "@/actions";
import { uploadProfile } from "@/actions/manager/uploadProfile";
import { FormButton, FormMessage } from "@/components/form";
import { Manager } from "@/types";
import { AlertDialog, Avatar } from "@radix-ui/themes";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";

type ProfileModalProps = {
    children: React.ReactNode
    manager: Manager
}
export default function ProfileModal({children, manager: manager}: ProfileModalProps) {
    const [res, action] = useFormState(uploadManagerProfile, {});
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
            <AlertDialog.Content style={{width: "300px"}} className="mx-auto p-4">
                <div>
                <div className="flex justify-end text-end pb-6">
                    <AlertDialog.Cancel>
                        <IoClose />
                    </AlertDialog.Cancel>
                </div>
                <div className="flex flex-col items-center">
                    <Avatar
                        variant="solid"
                        color="gray"
                        fallback={manager.fullname?.charAt(0)}
                        size="7"
                        radius="full"
                        src={manager.image}
                    />
                    <form action={action} className="grid grid-cols-1 gap-2 mt-4 w-full items-center">

                         <FormMessage res={res} />
                        {/* </div> */}
                            <input className="" name="image" type="file" id="profile" />
                        <FormButton className="btn-primary w-full px-4">Save</FormButton>
                        <input type="hidden" name="managerId" value={manager._id} />
                    </form>
                </div>
                </div>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}