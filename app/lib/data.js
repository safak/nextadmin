import { Product, User } from "./models"
import { connectToDb } from "./utils";


//fetch users
export const fetchUsers = async (q,page) => {
  const regex = new RegExp(q,"i");
  const ITEM_PER_PAGE = 2
  try {
    connectToDb()
    const count = await User.find({username: {$regex: regex}}).count()
    const users = await User.find({username: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));

    return {count,users}
  } catch (err) {
    console.log(err)
    throw new Error("Failed to fetch users!")
  }
};

// fetch single user
export const fetchUser = async (id) => {

  try {
    connectToDb()
    const user = await User.findById(id)

    return user
  } catch (err) {
    console.log(err)
    throw new Error("Failed to fetch user!")
  }
};


//fetch products
export const fetchProducts = async (q,page) => {

  const regex = new RegExp(q,"i");
  const ITEM_PER_PAGE = 2


  try {
    connectToDb()
    const count = await Product.find({title: {$regex: regex}}).count()
    const products = await Product.find({title: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));

    return {count,products}
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
};

// fetch single product
export const fetchProduct = async (id) => {

  try {
    connectToDb()
    const product = await Product.findById(id)

    return product
  } catch (err) {
    console.log(err)
    throw new Error("Failed to fetch product!")
  }
};