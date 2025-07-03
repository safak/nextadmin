// lib/auth.js

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
// import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"; // Tambahkan ini untuk membandingkan password

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: { username: credentials.username },
        });

        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) return null;

        return user; // User valid, dikembalikan ke NextAuth
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.role) token.role = user.role;
      if (user?.username) token.username = user.username;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.username = token.username;
      return session;
    },
  },
};
