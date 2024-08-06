export const ClientRequest =  {
    get (url: string) {
        return fetch(url, {
            headers: {
                'Content-Type': 'application/json'}
        })
    },
    post (url: string, body: any) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    },
    patch (url: string, body: any) {
        return fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
}


