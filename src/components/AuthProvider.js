'use client'
import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({ children, session }) => {
  return (
    <SessionProvider refetchOnWindowFocus={false} session={session}>
      {children}
    </SessionProvider>
  )
}

export default AuthProvider
