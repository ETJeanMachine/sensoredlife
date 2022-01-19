import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "aws-amplify";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginButton from "./components/LoginButton";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="navbar">
          <LoginButton />
          {/* <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          {isAuthenticated ? (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          ) : (
            <>
              <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </>
          )} */}
        </div>
        <Home />
      </div>
    </Router>
  );
}

export default App;
