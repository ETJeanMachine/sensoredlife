import { React, useState, useEffect } from "react";
import { format } from "react-string-format";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth0 } from "@auth0/auth0-react";


function Books() {
  const { user } = useAuth0();
  const firebaseConfig = {
    apiKey: "AIzaSyBrfqL3Daal65Ol1CaXt6AlZ2SM3j0rOUs",
    authDomain: "sensored-life.firebaseapp.com",
    projectId: "sensored-life",
    storageBucket: "sensored-life.appspot.com",
    messagingSenderId: "985352494852",
    appId: "1:985352494852:web:fb8e5c865c7c2f58dd7a51",
    measurementId: "G-TWKR6RBNE4",
  };
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState(null);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function addToDb(key) {
    const docRef = doc(db, 'lists', user.email);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      // We need to create a new document if it doesn't exist.
      await setDoc(doc(db, "lists", user.email), {
        key: "book"
      });
    }
    
  }

  useEffect(() => {
    search();
  }, []);

  const search = async (key) => {
    setQuery(key);
    const url = format(
      "https://www.googleapis.com/books/v1/volumes?q={0}&maxResults=5",
      key
    );
    const response = await fetch(url);
    const info = await response.json();
    try {
      setBooks(info.items);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h3>BOOKS</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => search(event.target.value)}
      />
      {books && books.length > 0 && query ? (
        <table>
          {books.map((book) => (
            <tr>
              <td>{book.volumeInfo.title}</td>{" "}
              <td>
                <button onClick={() => addToDb(book.id)}>+</button>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <h4>No books found</h4>
      )}
    </div>
  );
}

export default Books;
