

const HOST = "https://cpn-portal.onrender.com/api"
export const apis = {
    auth: {
        login: `${HOST}/auth/login`,
        register: `${HOST}/auth/register`,
        forgotPassword: `${HOST}/auth/forgot-password`,
        resetPassword: `${HOST}/auth/reset-password`,
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
    }

}


