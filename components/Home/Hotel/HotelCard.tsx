import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaHeart } from 'react-icons/fa';

type Props = {
    hotel: {
        id: string;
        image: string;
        name: string;
        location: string;
        rating: number;
        reviews: string;
        price: string;
    }
}

const HotelCard = ({ hotel, }: Props) => {
    return (
        <div>
            <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden'>
                {/* add to favorite button */}
                <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-rose-500 flex items-center justify-center'>
                    <FaHeart className='h-3 w-3' />
                </div>

                {/* Hover button only (no permanent overlay) */}
                <div className="absolute inset-0 bg-black/10 bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 z-10 flex items-center justify-center">
                    <Link
                        href={`rooms/${hotel.id}`}
                        className="opacity-0 group-hover:opacity-100 transition text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black text-sm font-medium cursor-pointer"
                    >
                        İncele
                    </Link>
                </div>

                {/* Image */}
                <Image
                    src={hotel.image}
                    alt={hotel.name}
                    width={500}
                    height={500}
                    className='overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110'
                />
            </div>

            {/* Content */}
            <div>
                <p className='text-sm text-gray-600 mt-3 font-medium mb-6'>
                    {hotel.location}
                </p>
                {/* ratings */}
                <div className='flex items-center space-x-2'>
                    <div className='px-2 py-2 bg-blue-800 rounded-md font-bold text-white text-xs'>
                        {hotel.rating}
                    </div>
                    <p className='text-sm font-bold text-gray-800'>{hotel.reviews}</p>
                </div>
                {/* prices */}
                <p className='mt-3 text-gray-700 font-medium'>
                    <span className='text-blue-600 font-bold'>{hotel.price} TL</span>
                </p>
            </div>
        </div>
    )
}

export default HotelCard