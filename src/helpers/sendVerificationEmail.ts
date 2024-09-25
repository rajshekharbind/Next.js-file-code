import {resend} from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";
import { promise } from "zod";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string

):Promise<ApiResponse>{
   try{
    await resend.emails.send({
        from: 'Apikeys.dev',
        to: email,
        subject: ' Mystry message Verification code',
        react:VerificationEmail({username,otp:verifyCode}),
      });




    return {success: true,message:' verification email send Successfully'}
   } catch(emailError){
     console.error("Erro sending verification email", emailError)
     return {success: false,message:'Failed to send verification email'}


   }
}