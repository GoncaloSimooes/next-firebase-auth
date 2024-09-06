// pages/api/auth/[...nextauth].ts

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import * as admin from 'firebase-admin';
import { cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Certifique-se de que o caminho do arquivo JSON está correto
const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: cert(serviceAccount),
  });
}

const firestore = getFirestore();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  adapter: FirebaseAdapter(firestore),
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
