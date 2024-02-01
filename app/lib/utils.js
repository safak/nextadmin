import mongoose from "mongoose";

// console.log(process.env.MONGO);
export const connectToDB = async () => {
  // mongoose.set("debug", true);
  const connection = {};

  try {
    if (connection.isConnected) {
      console.log("Already connected");
      return;
    }
    const encodedPassword = encodeURIComponent(process.env.password);
    const connectionURI = `mongodb://${process.env.uname}:${encodedPassword}@${process.env.ip}:${process.env._port}/${process.env.db}`;
    const db = await mongoose.connect(connectionURI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("Error: ", error);
    // throw new Error(error)
  }
};
