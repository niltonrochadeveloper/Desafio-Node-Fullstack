import NextAuth, { User, NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { useLoginMutation } from "@/services/auth";
import { z } from "zod";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

async function getUser(email: string, password: string): Promise<any> {
  try {
    const res = await fetch(`${process.env.API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const user = await res.json();

    if (res.ok && user) {
      return user;
    }
  } catch (error) {
    console.error("Failed to fetch user.", error);
    throw new Error("Failed to fetch user.");
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "text", placeholder: "insira o email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await getUser(
          credentials!.email,
          credentials!.password
        );

        if (response.result.user) {
          return response.result.user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session = token.user as any;
      return session;
    },
  },
};
