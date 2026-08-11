import React, { Component } from "react";
import Header from "./components/Header";
import Song from "./components/Song";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log("1. App se montó correctamente");
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main className="songs">
          <Song
            titulo="Bohemian Rhapsody"
            artista="Queen"
            album="A Night at the Opera"
            duracion="5:55"
          />

          <Song
            titulo="Holy Wars... The Punishment Due"
            artista="Megadeth"
            album="Rust in Peace"
            duracion="6:32"
          />

          <Song
            titulo="Fear of the Dark"
            artista="Iron Maiden"
            album="Fear of the Dark"
            duracion="7:18"
          />
        </main>
      </div>
    );
  }
}

export default App;
