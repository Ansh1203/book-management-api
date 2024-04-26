import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: { type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        createdAt: {type: Date, Default: Date.now()}
    });

    export const User= mongoose.model("User", UserSchema);