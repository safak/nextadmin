
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDb } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) =>{

  try {
    connectToDb()
    const user = await User.findOne({username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = (credentials.password === user.password)
      console.log(isPasswordCorrect)

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (error) {
    
    throw new Error("Failed to login!")
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials){
        try {
        const user =  await login(credentials);
        return user;
        } catch (err) {
          console.log(err)
          return null;
        }
      },
    }),
  ],
  callbacks:{
    async jwt({ token, user }){
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }){
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});