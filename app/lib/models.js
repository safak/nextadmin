import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        phone: {
            type: String, 
        },
        address: {
            type: String,
        },

    },
    { timestamps: true }
);


const campaignSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            unique: true,
        },
        campaign: {
            type: String,
            required: true,
        },
        region: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
            min: 0,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        img: {
            type: String,
        },

    },
    { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User",userSchema)
export const Campaign = mongoose.models.Campaign || mongoose.model("Campaign",campaignSchema)