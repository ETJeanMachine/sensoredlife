import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import BookSearch from "../components/BookSearch";
import AnimeSearch from "../components/AnimeSearch";
import List from "../components/List";

function Home() {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <div className="home">
      <div className="search">
        <BookSearch />
        <AnimeSearch />
        <List type="books"/>
        <List type="anime"/>
      </div>
    </div>
  ) : (
    <div className="home">
      <p>
        This is a web application where you can log in and create a list of
        favourite books and [something else].
      </p>
      <p>
        This application was made specifically for the company Sensored Life and
        their interview process. To use the application, please log in in the
        top right corner.
      </p>
    </div>
  );
}

export default Home;
