import React from 'react'
import { FaRegClock } from "react-icons/fa";

const SimpleCounter = (props) => {
    return (
        <div className='bigCounter'>
            <div className='calendar'>
                <FaRegClock />
            </div>
            <div className='four'>{props.digitFour}</div>
            <div className='three'>{props.digitThree}</div>
            <div className='two'>{props.digitTwo}</div>
            <div className='one'>{props.digitOne}</div>
        </div>
    )
}

export default SimpleCounter