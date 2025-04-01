import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import userModel from '../../../../models/user'
import paymentModel from '../../../../models/payment'
import connectDB from '../../../../connectDB'

export const authOptions = {
  providers: [
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET, // Ensure this is a valid JWT
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google" || account.provider === "github") {
        const currentUser = await userModel.findOne({ email: user.email });
        if (!currentUser) {
          const newUser = new userModel({ email: user.email, username: user.email.split('@')[0] });
          await newUser.save();
        } 
      }
      return true;
    },
    async session({ session, user, token }) {
      await connectDB();
      const dbUser = await userModel.findOne({ email: session.user.email }); // Fixed query
      if (dbUser) {
        session.user.name = dbUser.username; // Fixed property access
      }
      return session;
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
