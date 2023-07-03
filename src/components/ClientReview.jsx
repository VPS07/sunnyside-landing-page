import React from 'react'
import image_emily from '../assets/image-emily.jpg'
import image_thomas from '../assets/image-thomas.jpg'
import image_jennie from '../assets/image-jennie.jpg'
import ReviewCard from './ReviewCard'

function ClientReview() {
    return (
        <section className='flex flex-col items-center bg-[#fffbf8] py-20 lg:py-40'>
            <h3 className='text-[#818498] font-fraunce uppercase font-bold tracking-[0.25rem] text-xl'>Client testimonials</h3>
            <div className='flex flex-col lg:flex-row space-x-6'>
                <ReviewCard img={image_emily} reviewText={"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."} name={"Emily R."} position={"Marketing Director"} />
                <ReviewCard img={image_thomas} reviewText={"Sunnyside’s enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."} name={"Thomas S."} position={"Chief  Operating Officer"} />
                <ReviewCard img={image_jennie} reviewText={"Incredible end result! Our sales increased over 400% when we worked with Sunnyside.Highly recommended!"} name={"Jennie F."} position={"Business Owner"} />
            </div>
        </section>
    )
}

export default ClientReview