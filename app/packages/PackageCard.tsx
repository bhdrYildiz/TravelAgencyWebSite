"use client";
import { useState } from "react";
import Image from "next/image";
import { Package } from "@/data/data";
import Link from "next/link";
import { FaBed, FaUtensils, FaMapMarkerAlt } from "react-icons/fa";

type PackageCardProps = {
    pac: Package;
};

export default function PackageCard({ pac }: PackageCardProps) {
    const [duration, setDuration] = useState<"2gece" | "3gece">("2gece");

    const prices = {
        "2gece": pac.price2N,
        "3gece": pac.price3N,
    };

    return (
        <div className="flex flex-col md:flex-row bg-white shadow overflow-hidden mb-12">
            {/* Kapak Fotoğrafı */}
            <div className="w-full md:w-1/2 relative group h-[200px] md:h-auto">
                <Image
                    src={pac.images[0]} // sadece ilk fotoğraf
                    alt={pac.title}
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                </div>

                {/* Buton */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                    <Link
                        href={`/packages/${pac.id}`}
                        className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black text-sm font-medium transition"
                    >
                        İncele
                    </Link>
                </div>
            </div>
            
            {/* Package Info */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-rose-600">{pac.title}</h2>
                    <p className="text-gray-600 mt-2 text-sm">{pac.description}</p>

                    {/* Öne Çıkan Özellikler */}
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                        <div className="flex flex-col items-center">
                            <FaBed className="text-[#0cc0df] text-xl" />
                            <span className="text-xs mt-1">Konforlu Odalar</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaUtensils className="text-[#0cc0df] text-xl" />
                            <span className="text-xs mt-1">Kahvaltı Dahil</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaMapMarkerAlt className="text-[#0cc0df] text-xl" />
                            <span className="text-xs mt-1">{pac.destination}</span>
                        </div>
                    </div>

                    {/* Süre Seçici */}
                    <div className="mt-4">
                        <label className="block font-medium text-sm mb-1">Konaklama Süresi:</label>
                        <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value as "2gece" | "3gece")}
                            className="border border-gray-300 rounded px-3 py-1 text-sm"
                        >
                            <option value="2gece">2 Gece 3 Gün</option>
                            <option value="3gece">3 Gece 4 Gün</option>
                        </select>
                    </div>
                </div>

                {/* Fiyat */}
                <div className="mt-4">
                    <p className="text-xl font-semibold text-[#0cc0df]">
                        Fiyat: {prices[duration]}₺
                    </p>
                </div>
            </div>
        </div>
    );
}
