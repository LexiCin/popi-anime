import NextAuth from "next-auth";
import rxKingAuth from "next-auth/providers/github";

export const option = {
  providers: [
    rxKingAuth({
      clientId: process.env.RXKING_ID,
      clientSecret: process.env.RXKING_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(option);

export { handler as GET, handler as POST };
