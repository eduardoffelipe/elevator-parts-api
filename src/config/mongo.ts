import { MongooseModule as Mongoose } from "@nestjs/mongoose";

export const MongooseModule = Mongoose.forRoot(process.env.MONGOURL)