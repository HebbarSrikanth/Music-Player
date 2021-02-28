import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'

const Progress = ({ currentSong }) => {
    //State for playing/pausing
    const [isPlaying, setPlaying] = useState(false)
    const [currenTime, setTime] = useState({
        currentInfo: 0,
        duration: 0
    })
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
        setTime({
            ...currenTime,
            currentInfo: e.target.currentTime,
            duration: e.target.duration
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
    return (
        <div className='player'>
            <div className='time-control'>
                <p>{getTime(currenTime.currentInfo)}</p>
                <input type='range'
                    min={0}
                    value={currenTime.currentInfo}
                    max={currenTime.duration}
                    onChange={dragHandler}
                />
                <p>{getTime(currenTime.duration)}</p>
            </div>
            <div className='song-control'>
                <FontAwesomeIcon className='skip-back' icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playHandler} className='play' icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className='skip-next' icon={faAngleRight} />
            </div>
            <audio onTimeUpdate={timeHandler} onLoadedMetadata={timeHandler} ref={ref} src={currentSong.song}></audio>
        </div>
    )
}

export default Progress
