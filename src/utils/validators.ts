import { z } from "zod";

export const validators = {
    email: z.string().email("Invalid email").trim(),
    password: z.string().min(8, "Password must be at least 8 characters")
        .regex(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,  "Password must contain at least one number, one letter, and one special character" ),

    fullname: z.string().min(3, "Name must be at least 3 characters").trim(),
    min3: z.string().min(3, "must be at least 3 characters").trim(),
    date: z.string().min(3, "slect a valid date").trim(),
    accessCode: z.string().min(6, "invalid access code").trim(),
    phone: z.string().min(10, "invalid phone number").trim(),

}