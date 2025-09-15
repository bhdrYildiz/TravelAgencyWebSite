"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toursData, subTours } from "@/data/data";
import { FaRegClock } from "react-icons/fa";

export default function TurKategoriSayfasi() {
    // Filtreleme state
    const [filter, setFilter] = useState("hepsi");
    const { turId } = useParams();

    // Ana tur (kategori)
    const kategori = toursData.find(t => t.id === turId);
    if (!kategori) return notFound();

    // Bu kategoriye ait alt turlar
    const altTurlar = subTours.filter(st => st.categoryId === turId);

    // Diğer kategorilerden benzer turlar (max 3 tane)
    const benzerTurlar = toursData
        .filter(t => t.id !== turId)
        .slice(0, 3);

    // Filtre uygulanmış turlar
    const filteredTurlar = altTurlar.filter(tour => {
        if (filter === "fiyat") return !!tour.price;
        if (filter === "uzun") return tour.duration && parseInt(tour.duration) > 3;
        if (filter === "kisa") return tour.duration && parseInt(tour.duration) <= 3;
        return true;
    });

    return (
        <section>
            {/* Banner */}
            <div
                className="w-full h-[45vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${kategori.image})` }}
            >
                <h1 className="text-white text-4xl font-bold drop-shadow">{kategori.title}</h1>
            </div>

            {/* Sabit özel açıklama */}
            <div className="max-w-6xl mx-auto p-4">
                {/* Filtreleme Alanı */}
                <div className="flex gap-4 mb-6 mt-12">
                    <button
                        className={`px-4 py-2 rounded ${filter === "hepsi" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                        onClick={() => setFilter("hepsi")}
                    >
                        Hepsi
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${filter === "fiyat" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                        onClick={() => setFilter("fiyat")}
                    >
                        Fiyatı Olanlar
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${filter === "uzun" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                        onClick={() => setFilter("uzun")}
                    >
                        3+ Günlük
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${filter === "kisa" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                        onClick={() => setFilter("kisa")}
                    >
                        Kısa Turlar
                    </button>
                </div>

                {/* Alt turlar grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredTurlar.map(tour => (
                        <Link
                            key={tour.id}
                            href={`/turlar/${turId}/${tour.id}`}
                            className="group block rounded overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <div className="relative w-full h-48 overflow-hidden">
                                <Image
                                    src={tour.images[0]}
                                    alt={tour.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 z-10 pointer-events-auto">
                                    <span className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black text-sm font-medium transition cursor-pointer">
                                        İncele
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 bg-white">
                                <h3 className="font-semibold text-lg mb-2">{tour.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{tour.description}</p>
                                {tour.duration && (
                                    <div className="flex items-center text-gray-500 text-sm mb-1">
                                        <FaRegClock className="w-4 h-4 mr-1" />
                                        <span>{tour.duration}</span>
                                    </div>
                                )}
                                {tour.price && (
                                    <p className="text-red-600 font-semibold">{tour.price}</p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Benzer Turlar */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6">Benzer Turlar</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {benzerTurlar.map(tour => (
                            <Link
                                key={tour.id}
                                href={`/turlar/${tour.id}`}
                                className="block rounded overflow-hidden shadow hover:shadow-lg transition"
                            >
                                <div className="relative w-full h-40 overflow-hidden">
                                    <Image
                                        src={tour.image}
                                        alt={tour.title}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                </div>
                                <div className="p-4 bg-white">
                                    <h3 className="font-semibold">{tour.title}</h3>
                                    <p className="text-sm mt-2">{tour.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
