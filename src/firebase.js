// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCXCMrPYO-2njtufLXG6osU-WMoCmzVh_I",
  authDomain: "fan-app-development.firebaseapp.com",
  projectId: "fan-app-development",
  storageBucket: "fan-app-development.appspot.com",
  messagingSenderId: "798609856173",
  databaseURL: "https://fan-app-development-default-rtdb.firebaseio.com/",
  appId: "1:798609856173:web:33704a7bbe7e3ba6fc5824"
};

/*const firebaseConfig = {
  apiKey: "AIzaSyAxywrDgKKYmLRweZvmiWHarMmVTAW7DRg",
  authDomain: "fan-app-4f2f5.firebaseapp.com",
  projectId: "fan-app-4f2f5",
  storageBucket: "fan-app-4f2f5.appspot.com",
  messagingSenderId: "461439242593",
  appId: "1:461439242593:web:08ce4dc21d197a873b7520",
  measurementId: "G-8GZJ34YG52"
};
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export const auth = getAuth()
export default app