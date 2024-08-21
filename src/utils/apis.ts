import { addCourse } from "@/actions"


const HOST = "https://cpn-portal.onrender.com/api"
export const apis = {
    auth: {
        login: `${HOST}/auth/login`,
        register: `${HOST}/auth/register`,
        forgotPassword: `${HOST}/auth/forgot-password`,
        resetPassword: `${HOST}/auth/reset-password`,
    },

    general:{
        getStudents: `${HOST}/manager/students`,
    },

    admin:{
        createManager: `${HOST}/admin/create-managers`,
        deleteManager: (id:string)=>`${HOST}/admin/managers/${id}`,
        editManager: (id:string)=>`${HOST}/admin/managers/${id}`,
        createCenter: `${HOST}/admin/create-center`,
        getAdmin: `${HOST}/profile/admin`,
        getCenter: `${HOST}/admin/centers`,
        getManagers: `${HOST}/admin/managers`,
        createCourse: `${HOST}/admin/courses`,
        getCourses: `${HOST}/admin/courses`,
        editCourse: (id:string)=>`${HOST}/admin/courses/${id}`,
        deleteCourse:(id:string)=>`${HOST}/admin/courses/${id}`,
    },

    manager:{
        createStudent: `${HOST}/manager/students`,
        getProfile: `${HOST}/profile/manager`,
        editStudent: (id:string)=>`${HOST}/manager/students/${id}`,  
        deleteStudent: (id:string)=>`${HOST}/manager/students/${id}`,
        createStaff: `${HOST}/manager/staff`,
        getStaff: `${HOST}/manager/staff`, 
        editStaff: (id:string)=>`${HOST}/manager/staff/${id}`,
        deleteStaff: (id:string)=>`${HOST}/manager/staff/${id}`,
        getStudent: (id:string)=> `${HOST}/manager/students/${id}`,
        addCourse: ` ${HOST}/manager/students/plan`
       }

}


