import { React, useState, useEffect } from "react";
import { format } from "react-string-format";
import AddButton from "./AddButton";

function AnimeSearch() {
  const [anime, setAnime] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    search();
  }, []);

  const search = async (key) => {
    setQuery(key);
    const url = format("https://api.jikan.moe/v4/anime?q={0}&sfw&limit=5", key);
    const response = await fetch(url);
    const info = await response.json();
    try {
      setAnime(info.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h3>ANIME</h3>
      <input
        type="search"
        placeholder="Search..."
        onChange={(event) => search(event.target.value)}
      />
      {anime && anime.length > 0 && query ? (
        <table>
          <tbody>
            {anime.map((ani) => (
              <tr key={ani.title}>
                <td>{ani.title}</td>
                <td>
                  <AddButton type="anime" info={ani} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>No Anime found</h4>
      )}
    </div>
  );
}

export default AnimeSearch;
