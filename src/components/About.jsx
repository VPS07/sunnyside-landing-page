import React from 'react'
import image_transform from '../assets/desktop/image-transform.jpg'
import image_stand_out from '../assets/desktop/image-stand-out.jpg'

function About() {
    return (
        <>
            {/* Section 1 */}
            <section className='flex flex-col-reverse md:flex-row'>
                <div className='container'>
                    <h3 className='container__heading'>Transform your brand</h3>
                    <p className='container__description'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <div className='flex flex-col items-center'>
                        <p className='container__btn z-10'>LEARN MORE</p>
                        <p className='container__btn_border bg-yellow-100 hover:bg-yellow-300'></p>
                    </div>
                </div>
                <div className=' w-full md:w-1/2'>
                    <img src={image_transform} alt="image_transform" className='w-full h-full' />
                </div>
            </section>
            {/* Section 2 */}
            <section className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2'>
                    <img src={image_stand_out} alt="image_stand_out" className='w-full h-full' />
                </div>
                <div className='container'>
                    <h3 className='container__heading'>Stand out to the right audience</h3>
                    <p className='container__description'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                    <div className='flex flex-col items-center'>
                        <p className='container__btn z-10'>LEARN MORE</p>
                        <p className='container__btn_border bg-red-100 hover:bg-red-400'></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;