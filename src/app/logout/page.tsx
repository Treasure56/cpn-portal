"use client"

import { appCookies } from "@/utils";
import { useCookie, useEffectOnce } from "react-use";

export default function Page() {
    const [_, __, deleteToken] = useCookie(appCookies.accessToken)
    useEffectOnce(() => {
        deleteToken()
        window.location.href = "/"   
    })
    return (
        <>
        Loging out

        </>
    );
}