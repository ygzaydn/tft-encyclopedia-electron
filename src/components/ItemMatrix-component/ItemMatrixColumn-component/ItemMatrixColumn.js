import React from 'react'
import './ItemMatrixColumn-style.css'

const ItemMatrixColumn = ({children, changeStyle, rowNumber, changeItemID, set}) => {

    let par;
    children<=10 ? par=children : par=children;
    return (
        <div className="item-matrix-row">
            <a className={`item-matrix-column row-${rowNumber} column-${par%10}`} onClick={changeStyle}>
                <img 
                    className={`item-image-column`}
                    id={par}
                    src={require(`../../../assets/set${set}/items/${parseInt(par)}.png`)}
                    onClick={changeItemID}
                />
            </a>
        </div>
    )
}

export default ItemMatrixColumn