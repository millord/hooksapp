import React, { useState } from "react";
import uuid from "uuid/v1";

const SongList = props => {
  const [songs, setSongs] = useState([
    { title: "Mueve La Cadera", id: 1 },
    { title: "Trucho", id: 2 },
    { title: "Siempre Sere", id: 3 },
    { title: "A prueba de fuego", id: 3 }
  ]);
  const addSong = () => {
    setSongs([...songs, { title: "Chiquito Team band", id: uuid() }]);
  };
  return (
    <div>
      {songs.map(song => (
        <ul>
          <li key={song.id}>{song.title}</li>
        </ul>
      ))}
      <button onClick={addSong}>Add song</button>
    </div>
  );
};

export default SongList;
