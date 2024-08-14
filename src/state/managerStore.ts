import { Manager } from '@/types';
import {create} from 'zustand';

export type AdminState = {
    manager: Manager | null;
    setManager: (user: Manager | null) => void;
    sidebarOpen: boolean;
    setSidebar: (open: boolean) => void;
}

export const useManagerStore =  create<AdminState>(
    (set) => ({
        manager: null,
        sidebarOpen: false,
        setManager: (user) => set({manager: user}),
        setSidebar: (open) => set({sidebarOpen: open}),
    })
)