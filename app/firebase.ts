// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{ getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyWJOoNHvzf9Fv-kaOy_ghzcAvg2eRejo",
  authDomain: "nextjs-auth-project-b3e09.firebaseapp.com",
  projectId: "nextjs-auth-project-b3e09",
  storageBucket: "nextjs-auth-project-b3e09.appspot.com",
  messagingSenderId: "352100877597",
  appId: "1:352100877597:web:3e10afae32cec3ccc8cdf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)