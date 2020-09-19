import React from 'react';
import './Champion-style.css'

const Champion = ({ name, cost, traits, set, championId }) => {
    let link = name.toLowerCase().split(' ').join('');
    if (set===4) {
        link = championId
        traits = traits.map(el => el.includes('Set4_') ? el.slice(5) : el)
    }

    return (
    <div className="char-card" >
        <a className="char-name">{name}</a>
        <img 
            className="char-image" 
            src={require(`../../assets/set${set}/champions/${link}.png`)} 
        />
        <a className="char-cost">{`${cost} GOLD`}</a>
        <div className="char-traits">{traits.map(el => {
            return (
                <div 
                    className="char-trait"
                    key={el}>
                        {el}
                </div>
            )
        })}
        </div>

    </div>
    )
}

export default Champion;