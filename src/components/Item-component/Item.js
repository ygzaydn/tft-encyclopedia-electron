import React from 'react';
import './Item-style.css'

const Item = ({ name, imgId, description,set }) => {
    return (
        <div className="item-card">
            <a className="item-name">{name}</a>
            <img 
                className="item-image"
                src={require(`../../assets/set${set}/items/${imgId}.png`)}
            />
            <a className="item-description">{description}</a>
            {imgId>10? 
            <div className="item-subimage-section">
                <img 
                    className="item-subimage"
                    src={require(`../../assets/set${set}/items/${parseInt((imgId/10))}.png`)}
                />
                <a className="plus">+</a>
                <img 
                    className="item-subimage"
                    src={require(`../../assets/set${set}/items/${imgId%10}.png`)}
                />
            </div>
            :
            <a className="core-item-description">Core Item</a>
            }
        </div>
    )
}

export default Item