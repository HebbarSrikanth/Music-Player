import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'

const Progress = ({ currentSong, setCurrentSong, songs, setSongs }) => {
    //State for playing/pausing
    const [isPlaying, setPlaying] = useState(false)
    const [currenTime, setTime] = useState({
        currentInfo: 0,
        duration: 0,
        completePercentage: 0
    })

    useEffect(() => {
        if (isPlaying) {
            ref.current.play()
        }
        //eslint-disable-next-line
    }, [currentSong])

    //Reference for audio tag
    const ref = useRef(null)

    //Play/Pause Handler
    const playHandler = () => {
        if (isPlaying) {
            ref.current.pause()
            setPlaying(!isPlaying)
        } else {
            ref.current.play()
            setPlaying(!isPlaying)
        }
    }
    //Sond Duration Update
    const timeHandler = (e) => {
        const current = Math.round(e.target.currentTime)
        const end = Math.round(e.target.duration)
        const percentage = Math.round((current / end) * 100)
        setTime({
            ...currenTime,
            currentInfo: e.target.currentTime,
            duration: e.target.duration,
            completePercentage: percentage
        })
    }
    //Make proper time format
    const getTime = (time) => {
        return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    }
    //Drag then change the value
    const dragHandler = (e) => {
        setTime({
            ...currenTime,
            currentInfo: e.target.value
        })
        ref.current.currentTime = e.target.value
    }

    //Style complete percentage
    const styleSlider = {
        transform: `translateX(${currenTime.completePercentage}%)`
    }

    const controlHandler = (type) => {
        const length = songs.length;
        const songIndex = songs.findIndex(s => s.id === currentSong.id)
        let skipSong = '';
        if (type === 'back') {
            if (songIndex === 0) skipSong = songs[length - 1]
            else skipSong = songs[songIndex - 1]
        } else {
            if (songIndex === length - 1) skipSong = songs[0]
            else skipSong = songs[songIndex + 1]
        }
        const newSongList = (songs.map(s => s.id === skipSong.id ? { ...s, active: true } : { ...s, active: false }))
        setCurrentSong(skipSong)
        setSongs(newSongList)
    }

    return (
        <div className='player'>
            <div className='time-control'>
                <p>{getTime(currenTime.currentInfo)}</p>
                <div style=
                    {{ background: `linear-gradient(to right,${currentSong.colors[0]},${currentSong.colors[1]})` }}
                    className='track'
                >
                    <input type='range'
                        min={0}
                        value={currenTime.currentInfo}
                        max={currenTime.duration || 0}
                        onChange={dragHandler}
                    />
                    <div style={styleSlider} className='track-slider'></div>
                </div>
                <p>{currenTime.duration ? getTime(currenTime.duration) : '-:-'}</p>
            </div>
            <div className='song-control'>
                <FontAwesomeIcon className='skip-back' onClick={() => controlHandler('back')} icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playHandler} className='play' icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className='skip-next' onClick={() => controlHandler('skip')} icon={faAngleRight} />
            </div>
            <audio onTimeUpdate={timeHandler} onEnded={() => controlHandler('skip')} onLoadedMetadata={timeHandler} ref={ref} src={currentSong.song}></audio>
        </div>
    )
}

export default Progress
