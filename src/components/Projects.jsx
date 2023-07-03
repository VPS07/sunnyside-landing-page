import React from 'react'
import img_milkbottles from '../assets/desktop/image-gallery-milkbottles.jpg'
import img_orange from '../assets/desktop/image-gallery-orange.jpg'
import img_cone from '../assets/desktop/image-gallery-cone.jpg'
import img_sugarcubes from '../assets/desktop/image-gallery-sugarcubes.jpg'

function Projects() {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 max-w-full'>
            <img src={img_milkbottles} alt="image" />
            <img src={img_orange} alt="image" />
            <img src={img_cone} alt="image" />
            <img src={img_sugarcubes} alt="image" />
        </div>
    )
}

export default Projects