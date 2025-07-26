import React from 'react';
import { roomsData } from '@/data/data';
import RoomCard from './RoomCard';

const Rooms = () => {
    return (
        <section className="rooms-section">
            {/* Hero Section */}
            <div
                className="relative w-full h-[45vh] bg-fixed bg-center bg-cover brightness-75 flex items-center justify-center"
                style={{ backgroundImage: `url('/images/balon3.jpg')` }}
            >
                <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-widest z-10 mt-12">
                    ODALAR
                </h1>
            </div>

            {/* Room Cards Section */}
            <div className="w-[80%] mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {roomsData.map((room, i) => (
                    <div key={room.id} data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                        <RoomCard room={room} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Rooms;
