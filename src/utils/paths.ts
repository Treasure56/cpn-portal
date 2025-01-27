export const paths = {
    home: "/",
    logout: "/logout",


    // admin auth
    adminLogin: "/admin-login",
    adminRegister: "/admin-register",

    //admin pages
    admin: "/admin",
    adminStaff: "/admin/staff",
    adminStudents: "/admin/students",
    adminSingleStudent: (id:string)=>`/admin/students/${id}`,
    adminManagers: "/admin/managers",
    adminCourses: "/admin/courses",
    adminPayments: "/admin/payments",
    admininvoices: "/admin/invoices",
    adminSinglePayment: (id:string)=>`/admin/payments/${id}`,
    adminChangePassword: "/admin/change-password",
    adminInvoice: (id:string)=>`/admin/invoices/${id}`,
    adminSingleStaff: (id:string)=>`/admin/staff/${id}`,


    //manager pages
    manager: "/manager",
    managerStaff: "/manager/staff",
    managerStudents: "/manager/students",
    managerSingleStudent: (id:string)=>`/manager/students/${id}`,
    managerPayments: "/manager/payments",
    managerChangePassword: "/manager/change-password",
    managerCourses: "/manager/courses",
    managerInvoices: "/manager/invoices",
    managerSettings: "/manager/settings",
    managerInvoice: (id:string)=>`/manager/invoices/${id}`,
    managerSinglePayment: (id:string)=>`/manager/payments/${id}`,
    manageStaffSingle: (id:string)=>`/manager/staff/${id}`,







}