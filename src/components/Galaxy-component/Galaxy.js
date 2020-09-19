import React from 'react'

import './Galaxy-style.css'

const Galaxy = ({name, imgId, description }) => {

    return (
        <div className="galaxy-card">
            <a className="galaxy-name">{name}</a>
            <img 
                className="galaxy-image"
                src={require(`../../assets/set3/galaxies/${imgId}.png`)}
            />
            <a className="galaxy-description">{description}</a>
        </div>
    )
}

export default Galaxy;