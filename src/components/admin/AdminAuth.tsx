'use client'

import { useAdminStore} from "@/state";

export default function AdminAuth() {
    const admin = useAdminStore(s=>s.admin)
    return (
        <>
        <input type="hidden" hidden defaultValue={admin?._id} name="adminId" />
        <input type="hidden" hidden defaultValue={admin?.email} name="adminEmail" />
        </>
    );
}