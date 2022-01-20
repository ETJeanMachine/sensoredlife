import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Lists from "./views/Lists"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lists" element={<Lists />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
