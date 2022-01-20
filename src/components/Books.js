import {React, useState} from "react";

function Books() {
  const [bookSearch, setBookSearch] = useState("");
  const [movieSearch, setMovieSearch] = useState("");

  async function fetchBooks() {
    const url = "https://www.googleapis.com/books/v1/volumes?q=" + bookSearch;
    const response = await fetch(url);
  }

  function searchForBooks() {}

  return (
    <div>
      <h3>BOOKS</h3>
      <input
        type="search"
        placeholder="Search..."
        onChange={(event) => setBookSearch(event.target.value)}
      ></input>
      {}
    </div>
  );
}

export default Books;
