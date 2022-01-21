import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="header">
        <h1>Sensored Life Interview Assignment</h1>
      </div>
      <div className="navbar">
        {isAuthenticated ? (
          <>
            <p>{user.name}</p>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
      </div>
    </>
  );
}

export default Header;
