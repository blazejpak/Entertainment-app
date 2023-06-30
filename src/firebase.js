// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7UJ1Ls9Dk7uch8M5lqFcQlGpYHHanPoo",
  authDomain: "entertainment-app-6934b.firebaseapp.com",
  projectId: "entertainment-app-6934b",
  storageBucket: "entertainment-app-6934b.appspot.com",
  messagingSenderId: "982513492174",
  appId: "1:982513492174:web:188775cc956c8069ff309f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
