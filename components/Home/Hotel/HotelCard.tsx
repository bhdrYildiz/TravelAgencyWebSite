import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';

type Props = {
    tour: {
        id: string;
        title: string;
        description: string;
        image: string;
        link: string;
    };
};

const TourCard = ({ tour }: Props) => {
    return (
        <div className="relative w-full h-full rounded-lg overflow-hidden group cursor-pointer">
            {/* Favori butonu */}
            <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-rose-500 flex items-center justify-center shadow-md">
                <FaHeart className="h-3 w-3" />
            </div>

            {/* Görsel */}
            <Image
                src={tour.image}
                alt={tour.title}
                width={800}
                height={500}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Karanlık overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* İçerik overlay */}
            <div className="absolute bottom-0 left-0 p-5 text-white z-10">
                <h3 className="text-lg sm:text-xl font-bold">{tour.title}</h3>
                <p className="text-sm sm:text-sm line-clamp-2">{tour.description}</p>
            </div>

            {/* Hover'da görünen buton */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20">
                <Link
                    href={tour.link}
                    className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black text-sm font-medium"
                >
                    İncele
                </Link>
            </div>
        </div>
    );
};

export default TourCard;
