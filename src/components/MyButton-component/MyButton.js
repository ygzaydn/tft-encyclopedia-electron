import React from 'react';
import './MyButton-style.css'

const MyButton = ({name, click}) => {
    return(
        <a className="button"
            onClick={click}
        >
            {name}
        </a>
    )
}

export default MyButton