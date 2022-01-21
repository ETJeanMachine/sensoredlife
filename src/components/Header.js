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
            <p>{user.name}</p>
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </>
  );
}

export default Header;
