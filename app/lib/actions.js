"use server"

import { revalidatePath } from "next/cache";
import { User } from "./models"
import { connectToDB } from "./utils"
import { redirect } from "next/navigation";
import bcrypt from "bcrypt"
import { signIn } from "../auth";

export const addUser = async (formData) => {  
  const {username, email, password, isAdmin, isActive, phone,address} = Object.fromEntries(formData)
  
  try{
    connectToDB()
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt) 
    const newUser = new User({
      username, email, password: hashedPassword, isAdmin, isActive, phone, address
    })
    await newUser.save()
  } catch(err) {
    console.log("Error: ", err)
  }
  revalidatePath("/dashboard/users")
  redirect("/dashboard/users")
};

export const updateUser = async (formData) => {
  const { id, username, email, password, isAdmin, isActive, phone, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {username, email, password, isAdmin, isActive, phone, address}
    Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key])
    await User.findByIdAndUpdate(id, updateFields)
  } catch (err) {
    console.log("Error: ", err);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id)
  } catch (err) {
    console.error("Error: ", err);
  }
  revalidatePath("/dashboard/users");
};

export const authenticate = async (prevState, formData) => {  
  const {username, password} = Object.fromEntries(formData)
  // console.log("Username: ", username, " Password: ", password)
  try {
    await signIn("credentials", {username, password})
    // console.log("u: ", username, " p: ", password)
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
}