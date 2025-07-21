import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
    return (
        <div className='pt-20 pb-20'>
            {/*Section Heading*/}
            <div className='w-[80%] mx-auto'>
                <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>Tatilinize uygun aktiviteleri seçin</h1>
                <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>
                    Paketinize eklemek istediğiniz aktiviteyi kendiniz seçin..
                </p>
            </div>
            {/*Section Content*/}
            <div className='mt-14 w-[80%] mx-auto'>
                {/* Slider */}
                <DestinationSlider />
            </div>
        </div>
    )
}

export default Destination