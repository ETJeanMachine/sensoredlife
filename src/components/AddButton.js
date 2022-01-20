import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
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
    // For parsing the item's info that we're adding to the database.
    const info = props.info;
    var id;
    var title;
    switch (props.type) {
      case "anime":
        id = info.mal_id + "";
        title = info.title;
        break;
      case "books":
        id = info.id;
        title = info.volumeInfo.title;
        break;
      default:
        console.error("Something terrible happened.");
        return <button onClick={() => addToDb()}>+</button>;
    }
    // This is where we would check to see if the item is already in the database; and replace the button with a RemoveButton instead.
    // TODO
    // Now we add and merge the document to the collection we want (it also creates a new user if they don't exist already.).
    const path = format("users/{0}/{1}", user.email, props.type);
    console.log(id);
    await setDoc(
      doc(db, path, id),
      {
        title: title,
      },
      { merge: true }
    );
  }

  return <button onClick={() => addToDb()}>+</button>;
}

export default AddButton;
