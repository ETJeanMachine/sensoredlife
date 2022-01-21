import { React, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { initializeApp } from "firebase/app";
import {
  collection,
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
  const bookRef = collection(db, path);

  const [bookDocs, setBookDocs] = useState([]);
  // querying all of our books.
  const bookQuery = async () => {
    const q = query(bookRef, where("title", "!=", null));
    const docs = await getDocs(q);
    setBookDocs(docs.docs);
  };

  return (
    <div className="list">
      {props.type == "anime" ? <h3>ANIME LIST</h3> : <h3>BOOK LIST</h3>}
      <button onClick={() => bookQuery()}>Refresh List</button>
      <table>
        <tbody>
          {bookDocs.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.data().title}</td>
              <td>
                <RemoveButton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
