import React from 'react'
import icon_facebook from '../assets/icon-facebook.svg'
import icon_instagram from '../assets/icon-instagram.svg'
import icon_twitter from '../assets/icon-twitter.svg'
import icon_pinterest from '../assets/icon-pinterest.svg'

function Footer() {
    return (
        <footer className='flex flex-col items-center text-center py-20 bg-[#90d4c5] text-[#33685e] space-y-10'>
            <h3 className='font-Nunito-Sans font-extrabold text-4xl '>sunnyside</h3>
            <div className='font-barlow text-[#458c7e] space-x-16 text-lg '>
                <a href="#" className='hover:text-white'>About</a>
                <a href="#" className='hover:text-white'>Services</a>
                <a href="#" className='hover:text-white'>Projects</a>
            </div>
            <div className='flex space-x-7 pt-10'>
                <img src={icon_facebook} alt="" />
                <img src={icon_instagram} alt="" />
                <img src={icon_twitter} alt="" />
                <img src={icon_pinterest} alt="" />
            </div>
        </footer>
    )
}

export default Footer