import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
