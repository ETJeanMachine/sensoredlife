import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { isAuthenticated, user } = useAuth0();
  return isAuthenticated ? (
    <div className="main">TODO</div>
  ) : (
    <div className="main">
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
