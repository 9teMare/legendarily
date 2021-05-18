import React from 'react'
import Button from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src='/images/Header.jpg' alt='/'/>
            <h1>Legends Never Die</h1>
            <div className='hero-btns'>
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    WATCH CONCEPT VIDEO <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
