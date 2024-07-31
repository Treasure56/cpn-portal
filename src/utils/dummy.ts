import { Centers, Manager } from "@/types"

 export const centerDummy: Centers ={
    name: "John Doe",
    location: "Lagos, Nigeria",
    code: "CPT-1234",
    _id: "1234567890",
    createdAt: "2022-01-01T00:00:00.000Z",
}
export const centerDummys =[

    centerDummy,
    centerDummy,
    centerDummy,
]

export const managersDummy: Manager ={
    _id: "1234567890",
    createdAt: "2022-01-01T00:00:00.000Z",
    full_name: "John Doe",
    email: "j@j.com",
    password: "12345",
    phone: "08123456789",
    center_id: 1,
}

export const managersDummys =[

    managersDummy,
    managersDummy,
    managersDummy,
]

