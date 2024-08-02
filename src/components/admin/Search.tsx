import { BiSearch } from "react-icons/bi";

export default function Search() {
    return (
        <div className="flex gap-3">
            <div className="relative w-full md:w-fit">
                <BiSearch className="absolute top-1/2 -translate-y-1/2 left-2"/>
                <input
                    className="border-b py-2 ps-8 md:flex-shrink w-full md:w-[300px] block outline-none caret-secondary"
                    type="text" name="search" placeholder="Search by location or keyword" />
            </div>
            <button className="btn-primary !py-1 max-md:hidden px-6 flex-shrink-0">Search</button>
        </div>
    );
}