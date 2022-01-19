import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <Router>
      <div className="app">
        <Header />
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
        <Home />
      </div>
    </Router>
  );
}

export default App;
