require('dotenv').config()
import {initializeApp} from "firebase/app"


//Initialize firebase app
const app = initializeApp({
    apiKey: process.env.FIREBSAE_API_KEY,           // Auth / General Use
    appId: process.env.FIREBASE_APP_ID,             // General Use
    projectId: process.env.FIREBASE_PROJECT_ID,     // General Use
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,   // Auth with popup/redirect
    databaseURL: process.env.DATABASE_URL,          // Realtime Database
    storageBucket: process.env.STORAGE_BUCKET,      // Storage
    messagingSenderId: process.env.MESSAGING_ID,               // Cloud Messaging
    measurementId: process.env.MEASUREMENT_ID
  });

//const db //get db connection with app
export default app;