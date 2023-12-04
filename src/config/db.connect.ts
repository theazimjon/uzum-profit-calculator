import mongoose from "mongoose";
import {MONGODB_URL} from "./env.vars";

export default  async function  connectMongo() {
    return await mongoose.connect(MONGODB_URL);
}

