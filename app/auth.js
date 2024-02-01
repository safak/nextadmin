import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt"

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({username: credentials.username})

    if(!user) throw new Error("Wrong Username")
    // console.log(credentials.password, " : ", user.password)
    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
    if(!isPasswordCorrect) throw new Error("Wrong Password")
    return user;
  } catch (error) {
    throw new Error("Failed to Login: ", error.message)
  }
}

export const {signIn, signOut, auth} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null
        }
      },
    }),
  ],
  callbacks:{
    async jwt({token, user}){
      if(user){
        token.username = user.username
        token.img = user.img
      }
      return token;
    },
    async session({session, token}){
      if(token){
        session.user.username = token.username
        session.user.img = token.img
      }
      return session;
    }
  }
});
