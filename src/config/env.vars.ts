import {config} from "dotenv";
config();

export const BOT_TOKEN : string = process.env.BOT_TOKEN!,
    ADMIN_ID_1 : number  = parseInt(process.env.ADMIN_ID_1 || "0")!,
    ADMIN_ID_2 : number  = parseInt(process.env.ADMIN_ID_2 || "0")!,
    ADMIN_ID_3 : number  = parseInt(process.env.ADMIN_ID_3 || "0")!,
    MONGODB_URL : string  = process.env.MONGODB_URL!,
    BOT_USERNAME : string = process.env.BOT_USERNAME!,
    CHANNEL_ID_1 : string = process.env.CHANNEL_ID_1!,
    CHANNEL_USERNAME_1 : string = process.env.CHANNEL_USERNAME_1!,
    GROUP_ID: string = process.env.GROUP_ID!,
    CHANNEL_TITLE_1 = "Nest Js";
