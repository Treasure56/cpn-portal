

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
        createCenter: `${HOST}/admin/create-center`,
        getAdmin: `${HOST}/profile/admin`,
        getCenter: `${HOST}/admin/centers`,
        getManagers: `${HOST}/admin/managers`,
    }

}


