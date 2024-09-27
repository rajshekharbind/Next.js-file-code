import { z } from 'zod'

export const usernameValidation =z 
.string()
.min(2 ,"Username must be atleast 2 charecter")
.max(20,"Username must be no more than 20 charecter")
.regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special charecter")





export const signUpSchema = z.object({
    username: usernameValidation,
    email:z.string().email({message: 'Invalid email address'}),
    password:z.string().min(6,{message:"password must be atleast 6 charecter"})
})