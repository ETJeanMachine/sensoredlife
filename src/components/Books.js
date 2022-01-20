import { React, useState, useEffect } from "react";
import { format } from "react-string-format";
import AddButton from "./AddButton";

function Books() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    search();
  }, []);

  /**
   * Function that searches for a given string of input from the google database.
   * @param {*} key The input string that the user typed.
   */
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
          <tbody>
            {books.map((book) => (
              <tr key={book.volumeInfo.title}>
                <td>{book.volumeInfo.title}</td>
                <td>
                  <AddButton type="books" info={book} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>No books found</h4>
      )}
    </div>
  );
}

export default Books;
