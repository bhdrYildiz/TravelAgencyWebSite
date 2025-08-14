'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { activitiesData } from '@/data/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ActivityDetailPage() {
    const { activityId } = useParams();
    const activity = activitiesData.find((activity) => activity.id === activityId);

    if (!activity) return notFound();

    return (
        <>
            <section className="activityid-section">
                {/* Banner */}
                <section
                    className="relative w-full h-[45vh] bg-fixed bg-center bg-cover brightness-75 flex items-center justify-center"
                    style={{ backgroundImage: `url('/images/tur34.jpg')` }}
                >
                    <h1 className="text-blue-950 text-4xl sm:text-5xl font-bold tracking-widest z-10 mt-10">
                        {activity.title}
                    </h1>
                </section>

                <nav className="w-[80%] mx-auto py-8 px-2 text-gray-600 text-sm" aria-label="Breadcrumb">
                    <ol className="list-none p-0 inline-flex">
                        <li className="flex items-center">
                            <Link href="/" className="hover:text-rose-600">Ana Sayfa</Link>
                            <span className="mx-2">/</span>
                        </li>
                        <li className="flex items-center">
                            <Link href="/activities" className="hover:text-rose-600">Paketler</Link>
                            <span className="mx-2">/</span>
                        </li>
                        <li className="flex items-center text-gray-900 font-semibold">{activity.title}</li>
                    </ol>
                </nav>

                {/* Image Masonry Grid */}
                <section className="bg-gray-100 py-2 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                            {activity.images?.map((img: string, index: number) => (
                                <motion.div
                                    key={index}
                                    className="group break-inside-avoid overflow-hidden rounded-lg shadow transition-transform duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Image
                                        src={img}
                                        alt={`Aktivite görseli ${index + 1}`}
                                        className="w-full h-auto object-cover rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>

            {/* Activity Content */}
            <section className="max-w-6xl mx-auto px-2 py-12">
                {/* Başlık ve açıklama */}
                <h2 className="text-3xl font-bold mb-6 text-rose-500">{activity.title}</h2>
                <p className="text-base leading-7 mb-10 whitespace-pre-line text-black">{activity.description}</p>

                {/* Program (varsa) */}
                {activity.program.length > 0 && (
                    <div className="mb-12 space-y-6">
                        <h3 className="text-2xl font-semibold text-rose-500 mb-4">Tur Programı</h3>
                        {activity.program.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow">
                                <h4 className="text-lg font-semibold text-blue-950 mb-2">{item.title}</h4>
                                <p className="text-black whitespace-pre-line">{item.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Dahil olanlar */}
                {activity.included.length > 0 && (
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold mb-2 text-[#0a2c48]">Dahil Olan Hizmetler</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {activity.included.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Hariç olanlar */}
                {activity.excluded.length > 0 && (
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold mb-2 text-[#0a2c48]">Hariç Olan Hizmetler</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {activity.excluded.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* CTA Butonları */}
                <div className="flex flex-col sm:flex-row gap-10 mt-12 max-w-3xl">
                    <a
                        href="https://wa.me/905308485950"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-2 rounded-md text-lg font-semibold"
                    >
                        📱 Whatsapp: +90 530 389 71 63
                    </a>
                    <a
                        href="tel:+905322921467"
                        className="flex-1 text-center bg-rose-500 hover:bg-rose-700 text-white py-4 px-2 rounded-md text-lg font-semibold"
                    >
                        📞 Telefon: 0 (384) 341 46 10
                    </a>
                </div>
            </section>
        </>
    );
}
