import { React, useState, useEffect } from "react";
import { format } from "react-string-format";

function Books() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    search();
  }, []);

  const search = async (key) => {
    setQuery(key);
    console.log(query);
    const url = format(
      "https://www.googleapis.com/books/v1/volumes?q={0}&maxResults=5",
      key
    );
    const response = await fetch(url);
    const info = await response.json();
    try {
      setBooks(info.items);
      console.log(books);
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
                <button>+</button>
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
