import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  if (props.userName != null) {
    return (
      <>
        <div className="Taskbar">
          Logged in as {props.userName} - <Link to="/home">Log Out</Link>
        </div>
        <div className="Home">Logged in.</div>
      </>
    );
  }
  return (
    <>
      <div className="Taskbar">
        <Link to="/login">Log In</Link>
      </div>
      <div className="Home">Not Logged In</div>
    </>
  );
}

export default Home;
