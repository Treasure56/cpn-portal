'use client'

import { useChangeSearchParams } from "@/hooks";

export default function AdminSearch() {
    const { pushParams, params } = useChangeSearchParams();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const q = String(formData.get('search') ?? "");
            pushParams({ q })
        }} className="flex justify-stretch w-fit h-10 max-md:w-full">
            <input
            defaultValue={`${params.get('q')??''}`}
             placeholder="Search..." name="search" className="p-2 flex-shrink grow md:w-80 border border-black-100 rounded-l-md outline-primary" />
            <button className="btn-primary !py-2 !rounded-l-none flex-shrink-0 px-4 !rounded-r-md">Search</button>
        </form>
    );
}