import { hotelsData } from '@/data/data'
import React from 'react'
import HotelCard from './HotelCard'

const Hotel = () => {
    return (
        <div className='pb-20 pt-20'>
            {/* Section Heading*/}
            <div className='w-[80%] mx-auto'>
                <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>Kapadokya'da en uygun fiyatlı tatili planlayın..</h1>
                <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>
                    Bütçenize uygun tatil paketlerimizden biriini seçin..
                </p>
            </div>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8
        items-center mt-16'>
                {/* HotelCards */}
                {hotelsData.map((data, i) => {
                    return (
                        <div key={data.id} data-aos="fade-right" data-aos-anchor-placement="top-center"
                            data-aos-delay={`${i * 100}`}>
                            <HotelCard hotel={data} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Hotel