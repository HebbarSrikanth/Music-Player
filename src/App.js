import React, { useState } from 'react'
import Player from './components/Player'
import Song from './components/Song'
import './styles/app.scss'
import songData from './util'

const App = () => {
  const [songs, setSongs] = useState(songData())
  const [currentSong, setCurrentSong] = useState(songs[0])
  return (
    <div>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
