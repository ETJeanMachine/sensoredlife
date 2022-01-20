import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Header() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <div className="header">
        <h1>Sensored Life Interview Assignment</h1>
      </div>
      <div className="navbar">
        {isAuthenticated ? (
          <>
            <div id="right">
              <p>{user.name}</p>
              <LogoutButton />
            </div>
            <div id="left">
              <a href="/">Home</a>
              <a href="/lists">Lists</a>
            </div>
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </>
  );
}

export default Header;
