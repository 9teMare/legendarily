import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='card'>
            <h1>Feature 1</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/MSI.jpg'
                        text='MSI'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
