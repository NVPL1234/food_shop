import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTTKTg2tozbcTzXzalM5uE0i8oD2UYYVo",
  authDomain: "restaurantmanager-b7f1b.firebaseapp.com",
  projectId: "restaurantmanager-b7f1b",
  storageBucket: "restaurantmanager-b7f1b.appspot.com",
  messagingSenderId: "466508018671",
  appId: "1:466508018671:web:bad148dbaef57f8c5d7c1a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();