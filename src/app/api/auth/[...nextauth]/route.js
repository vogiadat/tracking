import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import * as bcrypt from 'bcrypt'
import { signIn } from "next-auth/react";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize({ email, password }, req) {
                const { dataValues: user } = await User.findOne({
                    where: {
                        email
                    }
                })

                if (!user) throw new Error("Error::: User not found!!!")

                const isPassword = await bcrypt.compare(
                    password,
                    user.password
                );

                if (!isPassword) throw new Error("Error::: Password invalid!!!");
                return user;
            }
        })
    ],
    callbacks: {
        async session({ session }) {
            const { dataValues: user } = await User.findOne({ where: { email: session.email } })
            session.user.id = user.id.toString()
            return session
        }
    }
})

export { handler as GET, handler as POST }