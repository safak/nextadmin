import {User, multipleFiles} from "./models"
import {connectToDB} from "../../app/lib/utils";

export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q,"i");

    const ITEM_PER_PAGE = 2;
    try{
        connectToDB()
        const count = await User.find({username:{$regex: regex}}).count();
        const users = await User.find({username:{$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {count,users}
    } catch (err){
        console.log(err)
        throw new Error("Failed to fetch users!!")
    }
}

// export const fetchProducts = async (q, page) => {
//
//     const regex = new RegExp(q,"i");
//
//     const ITEM_PER_PAGE = 2;
//     try{
//         connectToDB()
//         const count = await Product.find({title:{$regex: regex}}).count();
//         const products = await Product.find({title:{$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
//         return {count,products}
//     } catch (err){
//         console.log(err)
//         throw new Error("Failed to fetch products!!")
//     }
// }

export const fetchMultipleFiles = async (q, page) => {

    const regex = new RegExp(q,"i");

    const ITEM_PER_PAGE = 10;
    try{
        connectToDB()
        const count = await multipleFiles.find({Name:{$regex: regex}}).count();
        const files = await multipleFiles.find({Name:{$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {count,files}
    } catch (err){
        console.log(err)
        throw new Error("Failed to fetch products!!")
    }
}