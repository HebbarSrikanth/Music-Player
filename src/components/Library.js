import React from 'react'
import LibrarySongs from './LibrarySongs'

const Library = ({ songs, setCurrentSong, setSongs, showLibrary }) => {
    return (
        <div className={`library-container ${showLibrary ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div>
                {songs.map(song => <LibrarySongs
                    key={song.id}
                    currentSong={song}
                    setCurrentSong={setCurrentSong}
                    setSongs={setSongs}
                    songs={songs}
                />)}
            </div>
        </div>
    )
}

export default Library
