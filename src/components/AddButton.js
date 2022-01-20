import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { format } from "react-string-format";

function AddButton(props) {
  const firebaseConfig = {
    apiKey: "AIzaSyBrfqL3Daal65Ol1CaXt6AlZ2SM3j0rOUs",
    authDomain: "sensored-life.firebaseapp.com",
    projectId: "sensored-life",
    storageBucket: "sensored-life.appspot.com",
    messagingSenderId: "985352494852",
    appId: "1:985352494852:web:fb8e5c865c7c2f58dd7a51",
    measurementId: "G-TWKR6RBNE4",
  };
  const { user } = useAuth0();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function addToDb() {
    const userDocRef = doc(db, "users", user.email);
    const userDoc = await getDoc(userDocRef);
    // First thing we do is check if the user is in the database yet or not. If not, we have to add them.
    if (!userDoc.exists()) {
      await setDoc(doc(db, "users", user.email), {});
    }
  }

  return <button onClick={() => addToDb()}>+</button>;
}

export default AddButton;
