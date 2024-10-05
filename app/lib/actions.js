"use server"
import {User, multipleFiles} from "./models";
import {connectToDB} from "./utils";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import bcrypt from "bcrypt";
import fetch from "node-fetch";

const TELEGRAM_BOT_TOKEN = "6444368594:AAGrnFRM4phrYO0atPF2uRxWIqPU4aLqnzc";
//
// export const addUser = async (formData) => {
//     "use server"
//     const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData);
//
//     try{
//         connectToDB();
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt)
//         const newUser = new User({
//             username,
//             email,
//             password: hashedPassword,
//             phone,
//             address,
//             isAdmin,
//             isActive
//         });
//
//         await newUser.save();
//
//     } catch (err){
//         console.log(err);
//         throw new Error("Failed to create user!")
//     }
//
//    revalidatePath("/dashboard/users")
//     redirect("/dashboard/users")
// }
//
// export const addProduct = async (formData) => {
//     "use server"
//     const {title,desc,price,stock,color,size} = Object.fromEntries(formData);
//
//     try{
//         connectToDB();
//
//         const newProduct = new multipleFiles({
//             title,
//             desc,
//             price,
//             stock,
//             color,
//             size
//         });
//
//         await newProduct.save();
//
//     } catch (err){
//         console.log(err);
//         throw new Error("Failed to create product!")
//     }
//
//     revalidatePath("/dashboard/products")
//     redirect("/dashboard/products")
// }
//
//
//
export const deleteProduct = async (formData) => {
    const {id} = Object.fromEntries(formData);

    try{
        connectToDB();
        await multipleFiles.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete Products")
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products")
}
//
// export const deleteUsers = async (formData) => {
//     const {id} = Object.fromEntries(formData);
//
//     try{
//         connectToDB();
//         await User.findByIdAndDelete(id);
//     } catch (err) {
//         console.log(err);
//         throw new Error("Failed to delete Users")
//     }
//
//     revalidatePath("/dashboard/users");
//     redirect("/dashboard/users")
// }
//
// // export const telegramPosts = async (formData) => {
// //     "use server";
// //     const { Name, condition, make, model, year, price, carplate, fuel, engine, transmission, milage, color, files } = Object.fromEntries(formData);
// //
// //     try {
// //         await connectToDB();
// //
// //         const newProduct = new multipleFiles({
// //             Name,
// //             condition,
// //             make,
// //             model,
// //             year,
// //             price,
// //             carplate,
// //             fuel,
// //             engine,
// //             transmission,
// //             milage,
// //             color,
// //             files
// //         });
// //
// //         await newProduct.save();
// //
// //         // Post to Telegram
// //         const message = `New Product Added:\n
// //     Name: ${Name}\n
// //     Condition: ${condition}\n
// //     Make: ${make}\n
// //     Model: ${model}\n
// //     Year: ${year}\n
// //     Price: ${price}\n
// //     Car Plate: ${carplate}\n
// //     Fuel: ${fuel}\n
// //     Engine: ${engine}\n
// //     Transmission: ${transmission}\n
// //     Milage: ${milage}\n
// //     Color: ${color}\n
// //     Files: ${files.map(file => file.name).join(", ")}`;
// //
// //         await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
// //             method: "POST",
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify({
// //                 chat_id: "1090513806", // Update with your actual channel ID or chat ID
// //                 text: message,
// //             }),
// //         });
// //     } catch (err) {
// //         console.log(err);
// //         throw new Error("Failed to create product and post to Telegram!");
// //     }
// //
// //
// // };
//
// // export const telegramPosts = async (formData) => {
// //     "use server";
// //
// //     try {
// //         // Post a simple message "Hi" to Telegram
// //         const message = "Hi";
// //
// //         await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
// //             method: "POST",
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify({
// //                 chat_id: "1090513806", // Update with your actual channel ID or chat ID
// //                 text: message,
// //             }),
// //         });
// //     } catch (err) {
// //         console.log(err);
// //         throw new Error("Failed to send message to Telegram!");
// //     }
// // };
//
// // export const telegramPosts = async (formData) => {
// //     "use server";
// //
// //     try {
// //         const productId = formData.get('id');
// //         console.log(`Received product ID: ${productId}`);
// //
// //         connectToDB();
// //
// //         const product = await multipleFiles.findById(productId);
// //
// //         if (!product) {
// //             console.error("Product not found");
// //             throw new Error("Product not found");
// //         }
// //
// //         const message = `
// //     🚗 New Car Listing 🚗
// //
// //
// //     Name: ${product.Name}
// //     Condition: ${product.condition}
// //     Make: ${product.make}
// //     Model: ${product.model}
// //     Year: ${product.year}
// //     Price: ${product.price}
// //     Car Plate: ${product.carplate}
// //     Fuel: ${product.fuel}
// //     Engine: ${product.engine}
// //     Transmission: ${product.transmission}
// //     Mileage: ${product.milage || 'N/A'}
// //     Color: ${product.color}
// //
// //     Listed on: ${new Date(product.createdAt).toLocaleString()}
// //         `;
// //
// //         const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
// //             method: "POST",
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify({
// //                     chat_id: "1090513806", // Update with your actual channel ID or chat ID
// //                 text: message,
// //                 parse_mode: "Markdown"
// //             }),
// //         });
// //
// //         if (!response.ok) {
// //             throw new Error("Failed to send message to Telegram");
// //         }
// //
// //         // If there are images, send them as a media group
// //         if (product.files && product.files.length > 0) {
// //             const mediaGroup = product.files.map(file => ({
// //                 type: 'photo',
// //                 media: `http://localhost:5000/${file.filePath.replace(/\\/g, '/')}`
// //             }));
// //
// //             await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMediaGroup`, {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //                 body: JSON.stringify({
// //                     chat_id: "1090513806", // Update with your actual channel ID or chat ID
// //                     media: mediaGroup
// //                 }),
// //             });
// //         }
// //
// //         console.log("Message sent successfully to Telegram");
// //         return { success: true, message: "Listing sent to Telegram channel" };
// //     } catch (err) {
// //         console.error(err);
// //         return { success: false, message: "Failed to send listing to Telegram" };
// //     }
// //
// //     revalidatePath("/dashboard/products");
// //     redirect("/dashboard/products");
// // };
//
// // export const telegramPosts = async (formData) => {
// //     "use server";
// //
// //     try {
// //         const productId = formData.get('id');
// //         console.log(`Received product ID: ${productId}`);
// //
// //         connectToDB();
// //
// //         const product = await multipleFiles.findById(productId);
// //
// //         if (!product) {
// //             console.error("Product not found");
// //             throw new Error("Product not found");
// //         }
// //
// //         // Construct the message
// //         const message = `
// //     🚗 New Car Listing 🚗
// //
// //     Name: ${product.Name}
// //     Condition: ${product.condition}
// //     Make: ${product.make}
// //     Model: ${product.model}
// //     Year: ${product.year}
// //     Price: ${product.price}
// //     Car Plate: ${product.carplate}
// //     Fuel: ${product.fuel}
// //     Engine: ${product.engine}
// //     Transmission: ${product.transmission}
// //     Mileage: ${product.milage || 'N/A'}
// //     Color: ${product.color}
// //
// //     Listed on: ${new Date(product.createdAt).toLocaleString()}
// //         `;
// //
// //         // Send the message to Telegram
// //         const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
// //             method: "POST",
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify({
// //                 chat_id: "1090513806", // Update with your actual channel ID or chat ID
// //                 text: message,
// //                 parse_mode: "Markdown"
// //             }),
// //         });
// //
// //         if (!response.ok) {
// //             throw new Error("Failed to send message to Telegram");
// //         }
// //
// //         // If there are images, send them as a media group
// //         if (product.files && product.files.length > 0) {
// //             const mediaGroup = product.files.map(file => ({
// //                 type: 'photo',
// //                 media: `http://localhost:5000/${file.filePath.replace(/\\/g, '/')}`
// //             }));
// //
// //             await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMediaGroup`, {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //                 body: JSON.stringify({
// //                     chat_id: "1090513806", // Update with your actual channel ID or chat ID
// //                     media: mediaGroup
// //                 }),
// //             });
// //         }
// //
// //         console.log("Message sent successfully to Telegram");
// //         return { success: true, message: "Listing sent to Telegram channel" };
// //     } catch (err) {
// //         console.error(err);
// //         return { success: false, message: "Failed to send listing to Telegram" };
// //     }
// //
// //     revalidatePath("/dashboard/products");
// //     redirect("/dashboard/products");
// // };
//
// // export const telegramPosts = async (formData) => {
// //     "use server";
// //
// //     try {
// //         const productId = formData.get('id');
// //         console.log(`Received product ID: ${productId}`);
// //
// //         connectToDB();
// //
// //         const product = await multipleFiles.findById(productId);
// //
// //         if (!product) {
// //             console.error("Product not found");
// //             throw new Error("Product not found");
// //         }
// //
// //         const message = `
// // 🚗 New Car Listing 🚗
// //
// // Name: ${product.Name}
// // Condition: ${product.condition}
// // Make: ${product.make}
// // Model: ${product.model}
// // Year: ${product.year}
// // Price: ${product.price}
// // Car Plate: ${product.carplate}
// // Fuel: ${product.fuel}
// // Engine: ${product.engine}
// // Transmission: ${product.transmission}
// // Mileage: ${product.milage || 'N/A'}
// // Color: ${product.color}
// //
// // Listed on: ${new Date(product.createdAt).toLocaleString()}
// //         `;
// //
// //         const chatId = "1090513806"; // Update with your actual channel ID or chat ID
// //
// //         // Send the image first if available
// //         if (product.files && product.files.length > 0) {
// //             const fileUrl = `http://localhost:5000/${product.files[0].filePath.replace(/\\/g, '/')}`;
// //
// //             console.log(`Sending photo: ${fileUrl}`);
// //
// //             const photoResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //                 body: JSON.stringify({
// //                     chat_id: chatId,
// //                     photo: fileUrl,
// //                     caption: message,
// //                     parse_mode: "Markdown"
// //                 }),
// //             });
// //
// //             if (!photoResponse.ok) {
// //                 const errorDetails = await photoResponse.json();
// //                 console.error("Error details:", errorDetails);
// //                 throw new Error("Failed to send photo to Telegram");
// //             }
// //         } else {
// //             // If no image, send the text message
// //             const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //                 body: JSON.stringify({
// //                     chat_id: chatId,
// //                     text: message,
// //                     parse_mode: "Markdown"
// //                 }),
// //             });
// //
// //             if (!response.ok) {
// //                 const errorDetails = await response.json();
// //                 console.error("Error details:", errorDetails);
// //                 throw new Error("Failed to send message to Telegram");
// //             }
// //         }
// //
// //         console.log("Message sent successfully to Telegram");
// //         return { success: true, message: "Listing sent to Telegram channel" };
// //     } catch (err) {
// //         console.error(err);
// //         return { success: false, message: "Failed to send listing to Telegram" };
// //     }
// //
// //     revalidatePath("/dashboard/products");
// //     redirect("/dashboard/products");
// // };
//
//

export const telegramPosts = async (formData) => {
    "use server";

    try {
        const productId = formData.get('id');
        console.log(`Received product ID: ${productId}`);

        // Assuming you have a function to connect to your database
        connectToDB();

        const product = await multipleFiles.findById(productId);

        if (!product) {
            console.error("Product not found");
            throw new Error("Product not found");
        }

        // Prepare the media group for Telegram
        const mediaGroup = product.files.map((file, index) => ({
            type: 'photo',
            media: `https://api.hulemekina.com/${file.filePath.replace(/\\/g, '/')}`,
            caption: index === 0 ? generateCaption(product) : undefined
        }));

        // Send the media group to Telegram
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMediaGroup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: "1090513806",
                media: mediaGroup
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to send media group to Telegram");
        }

        console.log("Message and photos sent successfully to Telegram");
        return { success: true, message: "Listing sent to Telegram channel" };
    } catch (err) {
        console.error(err);
        return { success: false, message: "Failed to send listing to Telegram" };
    }

    // Ensure these functions are properly imported
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};


function generateCaption(product) {
    return `🚗 New Car Listing 🚗

Name: ${product.Name}
Condition: ${product.condition}
Make: ${product.make}
Model: ${product.model}
Year: ${product.year}
Price: ${product.price}
Car Plate: ${product.carplate}
Fuel: ${product.fuel}
Engine: ${product.engine}
Transmission: ${product.transmission}
Mileage: ${product.milage || 'N/A'}
Color: ${product.color}

Listed on: ${new Date(product.createdAt).toLocaleString()}`;
}









