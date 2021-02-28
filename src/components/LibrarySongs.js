import React from 'react'

const LibrarySongs = ({ currentSong, setCurrentSong, setSongs, songs }) => {
    const songHandler = (song) => {
        const newSongList = (songs.map(s => s.id === song.id ? { ...s, active: true } : { ...s, active: false }))
        setCurrentSong(song)
        setSongs(newSongList)
    }
    return (
        <div className={`song-info ${currentSong.active ? 'selected' : null}`} onClick={() => songHandler(currentSong)}>
            <img src={currentSong.coverPicture} alt={currentSong.name} />
            <div className='song-description'>
                <h3>{currentSong.name}</h3>
                <h4>{currentSong.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySongs
