import React from 'react'

function Services() {
    return (
        <section className='flex flex-col md:flex-row'>
            <div className='bg-image-graphic-design-d service__container text-[#25564b]'>
                <h3 className='service__container__heading'>Graphic Design</h3>
                <p className='font-barlow text-[#25564bd8] text-center'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
            <div className='bg-image-photography-d service__container text-[#19536b]'>
                <h3 className='service__container__heading'>Photography</h3>
                <p className='font-barlow text-center text-[#19536bd8]'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
        </section>
    )
}

export default Services