import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { authConfig } from "./authconfig"
import { connectToDB } from "./lib/utils"
import { User } from "./lib/models"
import bcrypt from "bcrypt"
const login = async (credentials) =>{
    try{
        connectToDB()
        const user = await User.findOne({username:credentials.username})

        if(!user) throw new err("Wrong credential")

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

        if(!isPasswordCorrect) throw new Error("Wrong credential")

        return user;
    }catch(err){
        console.log(err)
        throw new err("Failed to loogin")
    }
}

export const {signIn,signOut,auth} = NextAuth({
    ...authConfig,
  providers: [
    CredentialsProvider({
        async authorize(credentials){
try {
    const user = await login(credentials);
    return user;
} catch (err) {
    return null
}
        }
    })
  ],
  //takeing the data from user to token
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
      //takeing the token from user to session
      async session({ session, token }) {
        if (token) {
          session.user.username = token.username;
          session.user.img = token.img;
        }
        return session;
      },
  }
})