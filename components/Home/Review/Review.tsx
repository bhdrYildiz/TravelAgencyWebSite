import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Review = () => {
    return (
        <div className='pb-20 pt-20 flex items-center justify-center flex-col bg-[#13357b]'>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
                {/* Text Content */}
                <div>
                    <h1 className='text-2xl font-semibold text-white'>
                        Misafirlerimizin Yorumları
                    </h1>
                    <p className='mt-6 text-gray-200'>
                        Misafirlerimizden aldığımız olumlu geri bildirimler, hizmet kalitemizin en büyük göstergesidir.
                        Siz de Kapadokya’da unutulmaz bir deneyim yaşamak isterseniz,
                        Yıldız Hotel ailesi olarak her zaman yanınızdayız.
                    </p>
                    {/* Ratings */}
                    <div className='mt-6 flex items-center space-x-6'>
                        <div>
                            <p className='text-2xl font-bold text-white'>4.88</p>
                            <p className='text-white mb-2'>Overall Rating</p>
                            <div className='flex items-center'>
                                <FaStar className='text-white' />
                                <FaStar className='text-white' />
                                <FaStar className='text-white' />
                                <FaStar className='text-white' />
                                <FaStar className='text-white' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slider */}
                <div className='overflow-hidden'>
                    <ReviewSlider />
                </div>
            </div>
        </div>
    )
}

export default Review