import React from 'react'
import { FaRegClock } from "react-icons/fa";

const SimpleCounter = (props) => {
    return (
        <div className='bigCounter '>
            <div className='calendar bg-dark rounded'>
                <FaRegClock />
            </div>
            <div className='four bg-dark rounded'>{props.digitFour}</div>
            <div className='three bg-dark rounded'>{props.digitThree}</div>
            <div className='two bg-dark rounded'>{props.digitTwo}</div>
            <div className='one bg-dark rounded'>{props.digitOne}</div>
        </div>
    )
}

export default SimpleCounter