import React from 'react'

function ReviewCard({ img, reviewText, name, position }) {
    return (
        <div className='flex flex-col items-center pt-20 space-y-12'>
            <img src={img} alt="profile image" className='w-[4.5rem] rounded-full' />
            <p className='text-center w-[22rem] font-barlow text-lg text-gray-500'>
                {reviewText}
            </p>
            <div className='text-center space-y-2'>
                <p className='font-fraunce text-[#23303e] text-lg'>{name}</p>
                <p className='text-gray-400 text-sm font-barlow'>{position}</p>
            </div>
        </div>
    )
}

export default ReviewCard