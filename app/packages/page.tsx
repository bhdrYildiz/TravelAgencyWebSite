"use client";
import React, { useState, useMemo } from "react";
import { packagesData } from "@/data/data";
import PackageCard from "./PackageCard";

export default function PackagesPage() {
    const [selectedDestination, setSelectedDestination] = useState("Tümü");
    const [sortOrder, setSortOrder] = useState("asc");

    // Destinasyon listesi
    const destinations = ["Tümü", ...new Set(packagesData.map((p) => p.destination))];

    // Filtreleme ve sıralama
    const filteredData = useMemo(() => {
        let data = [...packagesData];

        if (selectedDestination !== "Tümü") {
            data = data.filter((p) => p.destination === selectedDestination);
        }

        data.sort((a, b) => {
            const priceA = a.price2N;
            const priceB = b.price2N;
            return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
        });

        return data;
    }, [selectedDestination, sortOrder]);

    // Grouped view için gruplama
    const groupedData = useMemo(() => {
        if (selectedDestination !== "Tümü") {
            return { [selectedDestination]: filteredData };
        }
        return filteredData.reduce((groups, pkg) => {
            if (!groups[pkg.destination]) groups[pkg.destination] = [];
            groups[pkg.destination].push(pkg);
            return groups;
        }, {} as Record<string, typeof packagesData>);
    }, [filteredData, selectedDestination]);

    return (
        <section className="packages-section">
            {/* Banner */}
            <div
                className="relative w-full h-[45vh] bg-fixed bg-center bg-cover brightness-75 flex items-center justify-center"
                style={{ backgroundImage: `url('/images/balon1.jpg')` }}
            >
                <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-widest z-10 mt-12">
                    TATİL PAKETLERİ
                </h1>
            </div>

            {/* Filtre Bar */}
            <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
                <select
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 text-sm w-full md:w-auto"
                >
                    {destinations.map((dest) => (
                        <option key={dest} value={dest}>
                            {dest}
                        </option>
                    ))}
                </select>

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 text-sm w-full md:w-auto"
                >
                    <option value="asc">Fiyat: Düşükten Yükseğe</option>
                    <option value="desc">Fiyat: Yüksekten Düşüğe</option>
                </select>
            </div>

            {/* Grouped View */}
            <div className="w-[80%] mx-auto py-12 flex flex-col gap-10">
                {Object.entries(groupedData).map(([dest, pkgs]) => (
                    <div key={dest}>
                        <h2 className="text-2xl font-bold text-blue-950 mb-6 border-b pb-2">
                            {dest}
                        </h2>
                        <div className="flex flex-col gap-10">
                            {pkgs.map((pac, i) => (
                                <div key={pac.id} data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                                    <PackageCard pac={pac} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
