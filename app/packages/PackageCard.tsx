"use client";
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';
import { Package } from '@/data/data';

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

type PackageCardProps = {
    pac: Package;
};

export default function PackageCard({ pac }: PackageCardProps) {
    const [duration, setDuration] = useState<'2gece' | '3gece'>('2gece');

    const prices = {
        '2gece': pac.price2N,
        '3gece': pac.price3N,
    };

    return (
        <div className="flex flex-col md:flex-row bg-white shadow overflow-hidden mb-12">
            {/* Image Carousel */}
            <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
                <Carousel responsive={responsive} arrows={true} autoPlay={false} infinite={true} className="custom-carousel">
                    {pac.images.map((img, i) => (
                        <div key={i} className="relative h-[300px] md:h-[450px]">
                            <Image
                                src={img}
                                alt={`Tatil Paketi Resim ${i + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Package Info */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-rose-600">{pac.title}</h2>
                    <p className="text-gray-600 mt-2 text-sm">{pac.description}</p>

                    {/* Pakete Dahil Olanlar */}
                    <div className="mt-2">
                        <h3 className="text-lg font-semibold text-blue-950 mb-2">Pakete Dahil Olanlar</h3>
                        <ul className="list-none space-y-1 text-sm text-gray-700">
                            <li>🎉 Oda süslemesi</li>
                            <li>🍇 Meyve tabağı ikramı</li>
                            <li>🍳 Kahvaltılar</li>
                            <li>🏍️ ATV Turu</li>
                            <li>📞 7/24 Danışmanlık</li>
                        </ul>
                    </div>

                    {/* Süre Seçici */}
                    <div className="mt-4">
                        <label className="block font-medium text-sm mb-1">Konaklama Süresi:</label>
                        <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value as '2gece' | '3gece')}
                            className="border border-gray-300 rounded px-3 py-1 text-sm"
                        >
                            <option value="2gece">2 Gece 3 Gün</option>
                            <option value="3gece">3 Gece 4 Gün</option>
                        </select>
                    </div>
                </div>

                {/* Fiyat */}
                <div className="mt-4">
                    <p className="text-xl font-semibold text-green-600">Fiyat: {prices[duration]}₺</p>
                </div>
            </div>
        </div>
    );
}
