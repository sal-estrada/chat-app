import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBoHlD7-syErqGdliT2KDVbaF1VwpH6i8",
  authDomain: "chatapp-ab43c.firebaseapp.com",
  projectId: "chatapp-ab43c",
  storageBucket: "chatapp-ab43c.firebasestorage.app",
  messagingSenderId: "492847686439",
  appId: "1:492847686439:web:45b99913cc628bf723bf02",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
