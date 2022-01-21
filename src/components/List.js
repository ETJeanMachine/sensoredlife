import { React, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { format } from "react-string-format";
import RemoveButton from "./RemoveButton.js";

function List(props) {
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
  const path = format("users/{0}/{1}", user.email, props.type);
  const ref = collection(db, path);

  const [docSnaps, setDocSnaps] = useState([]);
  // querying all of our docs.
  const bookQuery = async () => {
    const q = query(ref, where("title", "!=", null));
    const docs = await getDocs(q);
    setDocSnaps(docs.docs);
    console.log();
  };

  return (
    <div className="list">
      <h3>{props.type === "anime" ? "ANIME LIST" : "BOOK LIST"}</h3>
      <button onClick={() => bookQuery()}>Refresh/Load List</button>
      {docSnaps && docSnaps.length > 0 ? (
        <table>
          <tbody>
            {docSnaps.map((docSnap) => (
              <tr>
                <td>{docSnap.data().title}</td>
                <td>
                  <RemoveButton docSnap={docSnap} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>
          {props.type === "anime" ? "No anime in list" : "No books in list"}
        </h4>
      )}
    </div>
  );
}

export default List;
