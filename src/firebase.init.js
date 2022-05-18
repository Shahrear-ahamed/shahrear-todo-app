import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0j60QBdoDKC89pzVyPjrFrr-ufThq9SM",
  authDomain: "shahrear-todo-app.firebaseapp.com",
  projectId: "shahrear-todo-app",
  storageBucket: "shahrear-todo-app.appspot.com",
  messagingSenderId: "465603699041",
  appId: "1:465603699041:web:5f15e56715c16f16a2a520",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
