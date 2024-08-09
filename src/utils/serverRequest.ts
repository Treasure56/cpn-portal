import { cookies } from "next/headers"
import { appCookies } from "./cookies"

export const ServerRequest =  {
    get (url: string, init?: RequestInit) {
        const accessToken = cookies().get(appCookies.accessToken)?.value;
        if(!accessToken) return null;
        return fetch(url, {
            ...init,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': accessToken,
            }
        })
    },
    post (url: string, body: any, init?: RequestInit) {
        const accessToken = cookies().get(appCookies.accessToken)?.value;
        if(!accessToken) return null;
        return fetch(url, {
            ...init,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': accessToken,
            },
            body: JSON.stringify(body)
        })
    },
    patch (url: string, body: any, init?: RequestInit) {
        const accessToken = cookies().get(appCookies.accessToken)?.value;
        if(!accessToken) return null;
        return fetch(url, {
            ...init,
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': accessToken,
            },
            body: JSON.stringify(body)
        })
    },
    delete (url: string, body: any, init?: RequestInit) {
        const accessToken = cookies().get(appCookies.accessToken)?.value;
        if(!accessToken) return null;
        return fetch(url, {
            ...init,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': accessToken,
            },
            body: JSON.stringify(body)
        })
    }
}


