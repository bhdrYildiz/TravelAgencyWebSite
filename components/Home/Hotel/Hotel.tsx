import { toursData } from '@/data/data'
import React from 'react'
import HotelCard from './HotelCard'

const Hotel = () => {
    return (
        <div className='pb-20 pt-20'>
            {/* Başlık */}
            <div className='w-[80%] mx-auto'>
                <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>
                    Popüler Tatil Bölgeleri
                </h1>
                <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>
                    Hayalinizdeki tatil için en iyi seçenekler
                </p>
            </div>

            {/* İki kolon düzen */}
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>

                <div className="grid grid-rows-3 gap-6 h-[570px]">
                    {toursData.slice(0, 3).map((data, i) => (
                        <div
                            key={data.id}
                            className="h-full"
                            data-aos="fade-up"
                            data-aos-delay={`${i * 100}`}
                        >
                            <HotelCard tour={data} />
                        </div>
                    ))}
                </div>

                {/* Sağ sütun: 1 büyük kart */}
                <div className="h-full">
                    <div className="h-[570px]">
                        <HotelCard tour={toursData[3]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel
