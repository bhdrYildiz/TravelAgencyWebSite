// components/Rooms/Rooms.tsx
import React from 'react';
import Image from 'next/image';
import { roomsData } from '@/data/data';
import RoomCard from './RoomCard';

const Rooms = () => {
    return (
        <div className='pt-[12vh]'>
            {/* Hero Section */}
            <div className="relative w-full h-[40vh]">
                <Image
                    src="/images/balon3.jpg"
                    alt="Rooms Hero"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h1 className="text-white text-4xl sm:text-5xl font-bold uppercase tracking-widest">
                        Odalar
                    </h1>
                </div>
            </div>

            {/* Room Cards Section */}
            <div className="w-[80%] mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {roomsData.map((room, i) => (
                    <div key={room.id} data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                        <RoomCard room={room} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rooms;
