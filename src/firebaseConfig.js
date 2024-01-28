import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHe3Xot_43kzKT1uWQtP4cRPON9Zkq2tw",
  authDomain: "react-clima-service.firebaseapp.com",
  projectId: "react-clima-service",
  storageBucket: "react-clima-service.appspot.com",
  messagingSenderId: "51663339574",
  appId: "1:51663339574:web:97a1d49cf36cafa84e9897",
  measurementId: "G-CL02K0WSWT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)