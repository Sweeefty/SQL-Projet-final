import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import sqlite3 from "sqlite3";
import { Database, open } from "sqlite";

let db = null;

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!db) {
          // If the database instance is not initialized, open the database connection
          db = await open({
            filename: "./BDD.db", // Specify the database file path
            driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
          });
        }

        console.log("credentials", credentials);

        const user = db.get(
          "SELECT * FROM users WHERE username = ? AND password = ?",
          credentials.username,
          credentials.password,
        );

        console.log("user", user);

        return "resr";

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        console.log("signIn", { user, account, profile, email, credentials });
        if (!db) {
          // If the database instance is not initialized, open the database connection
          db = await open({
            filename: "./BDD.db", // Specify the database file path
            driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
          });
        }

        db.all(
          "INSERT INTO users (username, password) VALUES (?, ?)",
          credentials.username,
          credentials.password,
        );

        
      } catch (error) {
        console.log("signIn error", error);
      }

      
      return true;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.token,
          refreshToken: user.refreshToken,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.accessTokenExpires = token.accessTokenExpires;

      return session;
    },
  },
};

export default NextAuth(authOptions);
