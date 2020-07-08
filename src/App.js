import React from "react";
import "./App.css";
import { ReactComponent as Avatar } from "./assets/avatar.svg";
import { ReactComponent as Hamburger } from "./assets/hamburger.svg";
import { ReactComponent as Home } from "./assets/home.svg";
import { ReactComponent as Library } from "./assets/library.svg";
import logo from "./assets/logo.png";
import { ReactComponent as Search } from "./assets/search.svg";
import Video from "./components/Video/Video";

function App() {
  const videos = [];

  for (let i = 0; i < 10; i++) {
    videos.push(<Video key={`id: ${i}`} />);
  }

  return (
    <div className="App">
      <div id="header">
        <div id="first-item">
          <button className="small-button">
            <Hamburger className="small-icon" src={Hamburger} alt="Menu" />
          </button>
          <div id="logo">
            <img id="logo-image" src={logo} alt="Vdapp" />
          </div>
        </div>
        <div id="center-item">
          <form id="search-form">
            <input
              type="text"
              placeholder="Search"
              id="search-field"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              tabIndex="0"
              spellCheck="false"
            />
            <div className="small-button">
              <Search className="small-icon" src={Search} alt="Search" />
            </div>
          </form>
        </div>
        <div id="last-item">
          <button id="avatar">
            <Avatar className="small-icon" src={Avatar} alt="Avatar" />
          </button>
        </div>
      </div>
      <div id="body">
        <div id="side-panel">
          <button className="small-button side-panel-button">
            <Home className="small-icon" src={Home} alt="Home" />
            <span>Home</span>
          </button>
          <button className="small-button side-panel-button">
            <Library className="small-icon" src={Library} alt="Library" />

            <span>Library</span>
          </button>
        </div>
        <div id="videos">{videos}</div>
      </div>
    </div>
  );
}

export default App;
