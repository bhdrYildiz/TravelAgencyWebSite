"use client";
import React from 'react';
import { packagesData } from '@/data/data';
import PackageCard from './PackageCard';

export default function PackagesPage() {
    return (
        <>
            <section className="packages-section">
                <div
                    className="relative w-full h-[45vh] bg-fixed bg-center bg-cover brightness-75 flex items-center justify-center"
                    style={{ backgroundImage: `url('/images/balon1.jpg')` }}
                >
                    <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-widest z-10 mt-12">
                        TATİL PAKETLERİ
                    </h1>
                </div>

                {/* Package Cards Section */}
                <section className="w-[80%] mx-auto py-20 flex flex-col gap-10">
                    {packagesData.map((pac, i) => (
                        <div key={pac.id} data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                            <PackageCard pac={pac} />
                        </div>
                    ))}
                </section>
            </section>
        </>
    );
}
