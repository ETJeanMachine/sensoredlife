import { React, useState, useEffect } from "react";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    search();
  }, []);

  const search = async (key) => {
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=" + '"' + key + '"';
    const response = await fetch(url);
    const info = await response.json();
    try {
      setBooks(info.items.slice(0, 5));
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
      {books.map((book) => {
        <li>{book.volumeInfo.title}</li>;
      })}
    </div>
  );
}

export default Books;
