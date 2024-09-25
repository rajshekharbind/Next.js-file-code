import { Message } from "@/model/User";
export interface ApiResponse{
    success: Boolean;
    message: string;
isAccesptingMessages?: boolean
messages?:Array<Message>
}