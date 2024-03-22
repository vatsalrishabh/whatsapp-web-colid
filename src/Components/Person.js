import React from 'react'
import './Person.css'

const Person = () => {
    return (
        <div className='person'>
            <div className='person-left'>
                <div>
                    <img src='https://live.staticflickr.com/65535/49627727507_1aa4243274_c.jpg' />
                </div>
            </div>
            <div className='person-center'>
                <div className='name'>Vatsal Rishabh</div>
                <div className='last-message'>This is the last message of the game..</div>
            </div>
            <div className='person-right'>
                <div className='time'>7:32 AM</div>
                <div className='unread-count'>2</div>
            </div>
        </div>
    )
}

export default Person
