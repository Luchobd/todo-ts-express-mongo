import {Schema, model} from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const UserModel = model<User>("User", UserSchema);
export default UserModel;
