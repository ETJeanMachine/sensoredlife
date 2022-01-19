import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "aws-amplify";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { AppContext } from "./lib/contextLib";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import Signup from "./components/Signup";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Navbar">
          <LinkContainer to="/">
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
          )}
        </div>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/signup" exact element={<Signup />}></Route>
          </Routes>
        </AppContext.Provider>
      </div>
    </Router>
  );
}

export default App;
