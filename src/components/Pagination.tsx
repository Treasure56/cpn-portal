'use client'
import * as Popover from '@radix-ui/react-popover';
import { HTMLAttributes,  useMemo } from "react";
import { useChangeSearchParams } from "@/hooks";
import { Paginated } from '@/types';
import { debugLog } from '@/functions/debug';

export type PaginationProps = HTMLAttributes<HTMLDivElement> & {
    baseUrl?: string;
    pagination: Paginated<any>;
}

export function Pagination({ pagination, baseUrl, ...props }: PaginationProps) {
    const { currentPage: page, totalPages } = pagination;
    const {params, pushParams} = useChangeSearchParams(baseUrl);
    const toPage = (page:number)=>pushParams({'page': page.toString()})

    const _page = useMemo(() => +(params.get('page') ?? 1), [params])
    debugLog(_page);

    const firstThree = Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 3);
    const lastThree = Array.from({ length: totalPages }, (_, i) => i + 1).slice(totalPages - 3, totalPages).filter((page) => !firstThree.includes(page));

    return (
        <nav aria-label="Page navigation" {...props}>
            <ul className="flex items-center -space-x-px h-10 text-base rounded overflow-hidden border w-fit">
                {
                    page > 1 && (
                        <li>
                            <button onClick={()=>toPage(page - 1)} className="pagination-button">
                                <span className="sr-only">Previous</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </button>
                        </li>
                    )
                }
                {
                    firstThree.map((page) => (
                        <li key={page}>
                            <button onClick={()=>toPage(page)} {...{ 'data-active': page === _page }} className="pagination-button">
                                {page}
                            </button>
                        </li>
                    ))
                }

                {
                    totalPages > 6 && (
                        <li>
                            <Popover.Root>
                                <Popover.Trigger>
                                    <span className="pagination-button">...</span>
                                </Popover.Trigger>
                                <Popover.Anchor />
                                <Popover.Portal>
                                    <Popover.Content style={{
                                        maxWidth: 300,
                                        maxHeight: 300,
                                    }}>
                                        <div className="flex flex-wrap gap-2 rounded-lg border shadow-2xl p-4 bg-light">
                                            {
                                                Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                        <button  onClick={()=>toPage(page)} key={page} {...{ 'data-active': page === _page }} className="pagination-button !border !rounded">
                                                            {page}
                                                        </button>
                                                ))
                                            }
                                        </div>
                                    </Popover.Content>
                                </Popover.Portal>
                            </Popover.Root>
                        </li>
                    )
                }
                {
                    lastThree.map((page) => (
                        <li key={page} >
                            <button onClick={()=>toPage(page)} {...{ 'data-active': page === _page }} className="pagination-button">
                                {page}
                            </button>
                        </li>
                    ))
                }


                {
                    page < totalPages && (
                        <li>
                            <button onClick={()=>toPage(page + 1)} className="pagination-button">
                                <span className="sr-only">Next</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </button>
                        </li>
                    )
                }
            </ul>
        </nav>

    );
}