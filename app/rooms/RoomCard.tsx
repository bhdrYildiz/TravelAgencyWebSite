"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Room } from '@/data/data';

type RoomProps = {
    room: Room;
};

const RoomCard = ({ room }: RoomProps) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <div className="w-full aspect-[4/3] relative group">
                <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover rounded-t-lg transition duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 hover:bg-black/20 bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                    <Link
                        href={`/rooms/${room.id}`}
                        className="opacity-0 group-hover:opacity-100 transition text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black text-sm font-medium cursor-pointer"
                    >
                        İncele
                    </Link>
                </div>
            </div>

            <div className="p-4">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">{room.name}</h2>
                <ul className="text-sm text-gray-700 mb-2 list-disc ml-4">
                    {room.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <p className="text-rose-600 font-bold text-lg">{room.price}</p>
            </div>
        </div>
    );
};

export default RoomCard;
