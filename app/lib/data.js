import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i")
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB()
    const count = await User.find({username: {$regex: regex}}).count();
    const users = await User.find({username: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
    return {count, users};
  } catch (err) {
    console.log("Error: ", err)
    // throw new Error("Failed to fetch users")
  }
}

export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id)
    console.log(user)
    return user;
  } catch (err) {
    console.log("Error: ", err);
    // throw new Error("Failed to fetch users")
  }
};

export const userActiveCount = async () => {
  try {
    connectToDB();
    const activeUserCount = await User.countDocuments({ isActive: true });
    return activeUserCount;
  } catch (err) {
    console.log(err);
  }
};