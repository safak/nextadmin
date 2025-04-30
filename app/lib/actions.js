"use server"
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt"
import { signIn } from "../auth";

//Add USer
export const addUser = async(formData) => {

  const {username,email,password,phone,address,isAdmin,isActve} = Object.fromEntries(formData);

  try {

    connectToDb();
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username, email, password: hashedPassword, phone, address, isAdmin, isActve
    });

    await newUser.save();
    
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user!", error);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users")
};

//update user
export const updateUser = async(formData) => {
  const {id,username,email,password,phone,address,isAdmin,isActve} = Object.fromEntries(formData);

  try {
    connectToDb();

    const updateFields = {
      username,email,password,phone,address,isAdmin,isActve,
    }

    Object.keys(updateFields).forEach(
      (key)=>
        (updateFields[key] ==="" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);

  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user!", error);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users")
};

//ProductADD
export const addProduct = async(formData) => {

  const {title,desc,price,stock,color,size} = Object.fromEntries(formData);

  try {

    connectToDb();
    
    const newProduct = new Product({
      title,desc,price,stock,color,size,
    });

    await newProduct.save();
    
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create product!", error);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products")
};

//DELETE_PROD_FUNC
export const deleteProduct = async(formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product!", error);
  }

  revalidatePath("/dashboard/products");
  // redirect("/dashboard/products")
};

//DELETE_USER_FUNC
export const deleteUser = async(formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user!", error);
  }

  revalidatePath("/dashboard/users");
  // redirect("/dashboard/users")
};

//update product
export const updateProduct = async(formData) => {
  const { id,title,desc,price,stock,color,size } = Object.fromEntries(formData);

  try {
    connectToDb();

    const updateFields = {
      title,desc,price,stock,color,size,
    }

    Object.keys(updateFields).forEach(
      (key)=>
        (updateFields[key] ==="" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);

  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product!", error);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products")
};

//Login Auth
export const authenticate = async (formData) => {
  const {username, password} = Object.fromEntries(formData)

  try {
    console.log(username)
    await signIn("credentials", {username, password});
  } catch (err) {
    console.log(err);
  throw err;
}
};