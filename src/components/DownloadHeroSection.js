import React from 'react'
import './DownloadHeroSection.css'
import '../App.css'

function DownloadHeroSection() {
    return (
        <div className='hero-container'>
            <img src='/images/Download.jpg' alt='/'/>
            <h1>Download Legendarily !</h1>
            <div className='hero-btns'>
                <button className='btns'>
                    Google Play <i class="fab fa-google-play"></i>
                </button>
                <button className='btns'>
                    App Store <i class="fab fa-app-store-ios"></i>
                </button>
            </div>
        </div>
    )
}

export default DownloadHeroSection
