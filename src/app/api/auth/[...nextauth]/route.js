import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from '@/models'
import * as bcrypt from 'bcrypt'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize({ email, password }) {
        const user = await User.findOne({
          where: {
            email
          }
        })

        if (!user) throw new Error('Email invalid!!!')

        const isPassword = await bcrypt.compare(password, user.password)

        if (!isPassword) throw new Error('Password invalid!!!')
        return user
      }
    })
  ],
  callbacks: {
    async session({ session }) {
      const user = await User.findOne({ where: { email: session?.user.email } })
      session.user.id = user.id.toString()
      session.user.name = session.user.email.split('@').at(0)
      return session
    },
    async jwt({ token, user, account, profile }) {
      return token
    },
    async redirect({ baseUrl, url }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/'
  },
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
