import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// Define the handler and export it for both GET and POST requests
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
