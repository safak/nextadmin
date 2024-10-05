import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    isActive:{
        type: String,
        default: true
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    },
},{timestamps: true}
);


const multipleFileSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true,
    },
    make:{
        type:String,
        required: true,
    },
    model:{
        type: String,
        required: true,
    },
    year:{
        type: Number,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    carplate: {
        type: String,
        required: true,
    },
    fuel: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    milage:{
        type: String,
        required: false,
    },
    color: {
        type: String,
        required: true,
    },
    files: [Object]
},{timestamps: true});

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const multipleFiles = mongoose.models.multipleFiles || mongoose.model("multipleFiles", multipleFileSchema);