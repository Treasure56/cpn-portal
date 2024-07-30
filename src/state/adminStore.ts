import { Admin as AdminUser } from '@/types';
import {create} from 'zustand';

export type AdminState = {
    admin: AdminUser | null;
    setAdmin: (user: AdminUser | null) => void;
    sidebarOpen: boolean;
    setSidebar: (open: boolean) => void;

    // open category
    openCategory: string;
    setOpenCategory: (open: string) => void;
}

export const useAdminStore =  create<AdminState>(
    (set) => ({
        admin: null,
        sidebarOpen: false,
        openCategory: '16789',
        setOpenCategory: (open) => set({openCategory: open}),
        setAdmin: (user) => set({admin: user}),
        setSidebar: (open) => set({sidebarOpen: open}),
    })
)