import React, { useState } from 'react'
import Library from './components/Library'
import Nav from './components/Nav'
import Player from './components/Player'
import Song from './components/Song'
import './styles/app.scss'
import songData from './util'

const App = () => {
  const [songs, setSongs] = useState(songData())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [showLibrary, setLibrary] = useState(false)
  return (
    <div>
      <Nav showLibrary={showLibrary} setLibrary={setLibrary} />
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
      <Library
        songs={songs} showLibrary={showLibrary}
        setCurrentSong={setCurrentSong} setSongs={setSongs}
      />
    </div>
  );
}

export default App;
