const HOST = "https://cpn-portal.onrender.com/api"
export const apis = {
    auth: {
        login: `${HOST}/auth/login`,
        register: `${HOST}/auth/register`,
        forgotPassword: `${HOST}/auth/forgot-password`,
        resetPassword: `${HOST}/auth/reset-password`,
    }
}


/**
 * This page is where all the API endpoints related to authentication are defined.
 * It includes endpoints for login, register, forgot password, and reset password.
 * 
 * Each endpoint is defined with the following key-value pairs:
 * - Key: A descriptive name for the endpoint
 * - Value: The URL of the endpoint
 * 
 * For example, `login` is defined as `${HOST}/auth/login`, which means that the login endpoint is located at `https://cpn-portal.onrender.com/api/auth/login`.
 * 
 * You can use these endpoints to make requests to the corresponding endpoints in your application.
 */