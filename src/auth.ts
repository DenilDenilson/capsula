import NextAuth from 'next-auth'
import credentials from 'next-auth/providers/credentials'
import { getUser } from './server/authActions'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        const user = await getUser(credentials.username as string, credentials.password as string)

        return user
      }
    })
  ],
  pages: {
    signIn: '/signin'
  }
})
