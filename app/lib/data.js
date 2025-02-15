import { User, Report } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE =  5

try {
    await connectToDB();
    const count = await User.find({ username: { $regex: regex } }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
     return { count, users };
    } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
    }
};


export const fetchReports = async (q, page) => {

    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE =  5

try {
    await connectToDB();
    const count = await Report.find({ name: { $regex: regex } }).countDocuments();
    const reports = await Report.find({ name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
     return { count, reports };
    } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch reports!");
    }
};



