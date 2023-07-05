import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { IUser } from "../interfaces/user";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements IUser {

    @Prop() psw: string;

    @Prop() login: string;

    @Prop() email: string;

    @Prop() id: string; //   -----> добавить

    @Prop() calories: string

    @Prop() proteins: string

    @Prop() fats: string

    @Prop() carbohydrates: string
}

export const UserSchema = SchemaFactory.createForClass(User);