import {   z} from "zod"


export const messageSchema = z.object({
   content: z
   .string()
   .min(10,{message:'Content must be at least 10 charecter'})
   .max(300,{message:'Content must be no longer  3000 charecter'})

})