"use server";

import { revalidatePath } from "next/cache";
import { User, Product } from "./models";
import { connectToDB } from "./util";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export async function addUser(formData) {
  try {
    connectToDB();
    const { username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export async function addProduct(formData) {
  try {
    connectToDB();
    const { title, desc, price, stock, color, size, cat } =
      Object.fromEntries(formData);
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
      cat,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function deleteUser(formData) {
  try {
    const { id } = Object.fromEntries(formData);
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete the user!");
  }
  revalidatePath("/dashboard/users");
}

export async function deleteProduct(formData) {
  try {
    const { id } = Object.fromEntries(formData);
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete the product!");
  }
  revalidatePath("/dashboard/products");
}

export async function updateUser(formData) {
  try {
    const data = Object.fromEntries(formData);
    Object.keys(data).forEach(
      (key) => (data[key] === "" || undefined) && delete data[key]
    );
    const _id = data.id;
    delete data.id;
    connectToDB();
    await User.findByIdAndUpdate(_id, data);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the user!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export async function updateProduct(formData) {
  try {
    const data = Object.fromEntries(formData);
    Object.keys(data).forEach(
      (key) => (data[key] === "" || undefined) && delete data[key]
    );
    const _id = data.id;
    delete data.id;
    connectToDB();
    await Product.findByIdAndUpdate(_id, data);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the product!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}
