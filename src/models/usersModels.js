import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profession: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    }
});

const Users = mongoose.models.users || mongoose.model("Users", userSchema, "UsersData");
export default Users;