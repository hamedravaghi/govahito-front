import { handleLogin, handleRegister } from "@/src/services/endPoints";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
     pages: {
          signIn: "/otp",
     },
     session: {
          strategy: "jwt",
     },
     providers: [

          CredentialsProvider({
               name: "phone",
               async authorize(credentials) {
                    
                    try {
                         if (!credentials?.phoneNumber || !credentials.code) {
                              return null;
                         }

                         const response = await handleLogin(credentials)
                         const user = response.json()
                         if (user) {
                              return user
                         } else {
                              return null
                         }
                    } catch (error) {
                         return error
                    }
               },
          }),
          CredentialsProvider({
               name: "register",
               async authorize(credentials) {
                    console.log("login with phone working")
                    if (!credentials?.phoneNumber ||
                         !credentials?.code ||
                         !credentials?.firstName ||
                         !credentials?.lastName) {
                         return null;
                    }
                    const response = await handleRegister(credentials)
                    const user = await response.json()
                    if (user) {
                         return user
                    } else {
                         return null
                    }
               }
          })
     ],

     callbacks: {
          async jwt({ token, user }) {
               return { ...token, ...user }

          },
          async session({ session, token, user }) {
               session.user = token
               return session
          }

          // دیگر callbackها
     },

};



