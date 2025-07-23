"use client";
import React from 'react';
import Nav from '@/components/Home/Navbar/Nav';
import { packagesData } from '@/data/data';
import PackageCard from './PackageCard';
import Image from 'next/image';

export default function PackagesPage() {
    return (
        <>
            <Nav fixed />

            <div className="pt-[12vh]">
                {/* Hero Section */}
                <div className="relative w-full h-[40vh]">
                    <Image
                        src="/images/balon1.jpg"
                        alt="Tatil Paketleri Hero"
                        layout="fill"
                        objectFit="cover"
                        className="brightness-50"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-widest">
                            TATİL PAKETLERİ
                        </h1>
                    </div>
                </div>

                {/* Package Cards Section */}
                <section className="w-[80%] mx-auto py-20 flex flex-col gap-10">
                    {packagesData.map((pac, i) => (
                        <div key={pac.id} data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                            <PackageCard pac={pac} />
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}
