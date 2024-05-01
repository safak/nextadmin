import { User } from "./models";
import { Campaign } from "./models"
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 2

    try {
        connectToDB();
        const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({ username: { $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count, users};
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};

export const fetchCampaigns = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 2

    try {
        connectToDB();
        const count = await Campaign.find({ title: { $regex: regex } }).count();
        const campaigns = await Campaign.find({ title: { $regex: regex }})
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page-1));
        return {count, campaigns};
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch campaigns!");
    }
};