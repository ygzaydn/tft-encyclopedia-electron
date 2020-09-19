import React from 'react'
import './Trait-style.css'

const Trait = ({name, imgId, description, set}) => {
    if(imgId.includes('Set3_')){
        imgId = imgId.slice(5);
    } else if(imgId.includes('Set4_')){
        imgId = imgId.slice(5);
    } 
    imgId = imgId.toLowerCase();
    return (
        <div className="trait-card">
            <a className="trait-name">{name}</a>
            <img 
                className="trait-image"
                src={require(`../../assets/set${set}/traits/${imgId}.png`)}
            />
            <a className="trait-description">{description}</a>
        </div>
    )
}

export default Trait