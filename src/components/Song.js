import React, { Component } from "react";

class Song extends Component {
    render() {
        return (
            <article className="song">
                <h2 className="song__title">{this.props.titulo}</h2>
                <p className="song__artist">Artista: {this.props.artista}</p>
                <p className="song__album">Álbum: {this.props.album}</p>
                <p className="song__duration">Duración: {this.props.duracion}</p>
            </article>
        );
    }
}

export default Song;