import React, { useState } from 'react'

function NavBar() {
    const [showHamMenu, setShowHamMenu] = useState(false)

    return (
        <nav className='flex justify-between pt-9 mx-10 lg:mx-20'>
            <h3 className='font-Nunito-Sans font-extrabold text-4xl'>sunnyside</h3>
            <div className='hidden lg:flex text-lg space-x-10 font-barlow'>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <div><a href="#" className='font-fraunce text-base bg-white text-black uppercase px-6 py-4 rounded-full hover:text-white hover:bg-white/30'>Contact</a></div>
            </div>

            <div className='flex lg:hidden relative'>
                <svg className='cursor-pointer' onClick={() => setShowHamMenu(!showHamMenu)} width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v2H0V0zm0 8h24v2H0V8zm0 8h24v2H0v-2z" fill="#FFF" fill-rule="evenodd" /></svg>

                {showHamMenu ?
                    <div>
                        <div className='triangle absolute top-9 right-1'></div>
                        <div className='flex flex-col justify-center items-center space-y-7 sm:space-y-9 font-barlow absolute w-72 h-72 sm:w-80 sm:h-80 bg-white right-1 top-14 text-gray-500'>
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Projects</a>
                            <a href="#" className='font-fraunce text-base bg-yellow-300 text-black uppercase px-6 py-4 rounded-full  hover:text-white hover:bg-black/30'>Contact</a>
                        </div>
                    </div>

                    : null}
            </div>
        </nav>
    )
}

export default NavBar