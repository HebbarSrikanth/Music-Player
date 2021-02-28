import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ showLibrary, setLibrary }) => {
    return (
        <nav className='nav'>
            <h3>Waves</h3>
            <button onClick={() => setLibrary(!showLibrary)}>
                Library <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav
