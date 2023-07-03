import React from 'react'
import NavBar from './NavBar'
import arrow_down from "../assets/icon-arrow-down.svg"

function MainPage() {
    return (
        <div className='bg-header-img-m md:bg-header-img-d bg-no-repeat bg-cover bg-center h-[100vh] text-white'>
            <NavBar />
            <div className='text-center mt-28 text-[2.5rem] sm:text-[3.5rem] tracking-[0.6rem] font-fraunce font-extrabold'>WE ARE CREATIVES</div>
            <div className='flex justify-center pt-28'>
                <img src={arrow_down} alt="down arrow" />
            </div>
        </div>
    )
}

export default MainPage