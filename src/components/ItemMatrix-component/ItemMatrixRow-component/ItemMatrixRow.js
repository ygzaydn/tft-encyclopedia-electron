import React from 'react'
import './ItemMatrixRow-style.css'


const ItemMatrixRow = ({children}) => {
    return (
        <div className={`item-matrix-row}`}>
            {children}
        </div>
    )
}

export default ItemMatrixRow