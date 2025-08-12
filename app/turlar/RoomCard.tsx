"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/data/data";

type TourProps = {
    tour: Tour;
};

const RoomCard = ({ tour }: TourProps) => {
    return (
        <div className="flex flex-col md:flex-row bg-white shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            {/* Sol taraf: resim + hover efekti */}
            <div className="relative w-full md:w-1/4 min-h-[220px] overflow-hidden">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Soldan sağa gelen karartı */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                </div>

                {/* Buton */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                    <Link
                        href={`/turlar/${tour.id}`}
                        className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black text-sm font-medium transition"
                    >
                        İncele
                    </Link>
                </div>
            </div>

            {/* Sağ taraf: metinler */}
            <div className="w-full md:w-3/4 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-blue-900 mb-2">{tour.title}</h2>
                <p className="text-gray-700 mb-4">{tour.description}</p>
                {tour.longDescription && (
                    <p className="text-gray-500 text-sm leading-relaxed">
                        {tour.longDescription}
                    </p>
                )}
                {/* Sağ alt köşe butonu */}
                <a
                    href="mailto:info@yildizhotelcappadocia.com"
                    className="mt-auto self-end bg-rose-600
                    relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2
                    hover:ring-red-400 transition-all ease-out duration-300' px-4 py-2 rounded text-sm font-medium"
                >
                    Bize Ulaşın
                </a>
            </div>
        </div>
    );
};

export default RoomCard;