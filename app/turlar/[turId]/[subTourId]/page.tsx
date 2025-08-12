"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toursData, subTours } from "@/data/data";
import { FaRegClock } from "react-icons/fa";

export default function TurKategoriSayfasi() {
    const { turId } = useParams();

    const kategori = toursData.find(t => t.id === turId);
    if (!kategori) return notFound();

    const altTurlar = subTours.filter(st => st.categoryId === turId);

    return (
        <section>
            {/* Banner */}
            <div
                className="relative w-full h-[45vh] bg-fixed bg-center bg-cover brightness-75 flex items-center justify-center"
                style={{ backgroundImage: `url(${kategori.image})` }}
            >
                <h1 className="text-white text-4xl font-bold drop-shadow">{kategori.title}</h1>
            </div>

            {/* Sabit özel açıklama */}
            <div className="max-w-6xl mx-auto p-6">
                <p className="mb-8 text-gray-700">
                    Buraya kategoriye özel olmayan, sayfada sabit kalacak genel bir açıklama metni koyabilirsin.
                    Mesela otelimizin sunduğu turlar hakkında genel bilgi gibi.
                </p>

                {/* Alt turlar grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {altTurlar.map(tour => (
                        <Link
                            key={tour.id}
                            href={`/turlar/${turId}/${tour.id}`}
                            className="group block rounded overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <div className="relative w-full h-48 overflow-hidden">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Soldan sağa gelen karartı */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                                </div>

                                {/* İncele butonu */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 z-10 pointer-events-auto">
                                    <span className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black text-sm font-medium transition cursor-pointer">
                                        İncele
                                    </span>
                                </div>
                            </div>

                            <div className="p-4 bg-white">
                                <h3 className="font-semibold text-lg mb-2">{tour.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{tour.description}</p>

                                {/* Süre - Time */}
                                {tour.duration && (
                                    <div className="flex items-center text-gray-500 text-sm mb-1">
                                        <FaRegClock className="w-4 h-4 mr-1" />
                                        <span>Time: {tour.duration}</span>
                                    </div>
                                )}

                                {/* Fiyat */}
                                {tour.price && (
                                    <p className="text-red-600 font-semibold">{tour.price}</p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
