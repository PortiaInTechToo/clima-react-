import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project was coded by Portia Mthethwa and is open-sourced on {""}
          {""}
          <a
            href="https://github.com/PortiaInTechToo/clima-react-"
            target="_blank"
            rel="noreferrer"
          >
            {""}
            Github
          </a>
          {""} and is hosted on {""}
          <a
            href="https://silver-choux-e22fb1.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
