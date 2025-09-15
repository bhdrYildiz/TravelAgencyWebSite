"use client";

import { useParams, notFound } from "next/navigation";
import { packagesData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FaBed, FaUtensils, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1324 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1324, min: 764 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 764, min: 0 }, items: 1, slidesToSlide: 1 }
};

export default function PackageDetail() {
    const { packagesId } = useParams();
    const pkg = packagesData.find((p) => p.id === packagesId);
    if (!pkg) return notFound();

    const [duration, setDuration] = useState<"2gece" | "3gece">("2gece");
    const prices = { "2gece": pkg.price2N, "3gece": pkg.price3N };
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="pb-20">

            {/* Hero */}
            <div
                className="relative w-full h-[45vh] bg-center bg-cover flex items-center justify-center"
                style={{ backgroundImage: `url(${pkg.images[0]})` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <h1 className="text-white text-4xl md:text-5xl font-bold z-10 text-center px-4">
                    {pkg.title}
                </h1>
            </div>

            {/* Breadcrumb */}
            <nav className="w-[80%] mx-auto py-4 px-2 text-gray-600 text-sm" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                        <Link href="/" className="hover:text-rose-600">Ana Sayfa</Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="flex items-center">
                        <Link href="/packages" className="hover:text-rose-600">Paketler</Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="flex items-center text-gray-900 font-semibold">{pkg.title}</li>
                </ol>
            </nav>

            {/* İçerik */}
            <div className="w-[80%] mx-auto py-4 grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Sol */}
                <div className="lg:col-span-2 flex flex-col gap-8">

                    {/* Galeri */}
                    <div>
                        <Carousel
                            additionalTransfrom={0} arrows autoPlay={false} centerMode={false}
                            className="package-carousel" containerClass="container-with-dots"
                            draggable focusOnSelect={false} infinite={false} itemClass="px-2"
                            keyBoardControl minimumTouchDrag={80} renderButtonGroupOutside={false}
                            renderDotsOutside={false} responsive={responsive} showDots swipeable
                        >
                            {pkg.images.map((img, i) => (
                                <div
                                    key={i}
                                    className="w-full cursor-pointer"
                                    onClick={() => { setPhotoIndex(i); setIsOpen(true); }}
                                >
                                    <div className="w-full h-64">
                                        <img
                                            src={img}
                                            alt={`${pkg.title} fotoğraf ${i + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                        {/* --- MODERN LIGHTBOX --- */}
                        {isOpen && (
                            <Lightbox
                                open={isOpen}
                                index={photoIndex}
                                close={() => setIsOpen(false)}
                                slides={pkg.images.map((img) => ({ src: img }))}
                                plugins={[Thumbnails]}
                            />
                        )}
                    </div>

                    {/* Paket Hakkında */}
                    <div>
                        <h2 className="text-2xl font-bold text-rose-600 mb-4">Paket Hakkında</h2>
                        <p className="text-gray-700 leading-relaxed">{pkg.longDescription}</p>
                    </div>

                    {/* Paket İçeriği */}
                    <div>
                        <h2 className="text-2xl font-bold text-rose-600 mb-4">Paket İçeriği</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <li className="flex items-center gap-2 text-gray-700"><FaBed className="text-[#0cc0df]" /> Konforlu odalar</li>
                            <li className="flex items-center gap-2 text-gray-700"><FaUtensils className="text-[#0cc0df]" /> Kahvaltı dahil</li>
                            <li className="flex items-center gap-2 text-gray-700"><FaMapMarkerAlt className="text-[#0cc0df]" /> {pkg.destination} gezisi</li>
                            <li className="flex items-center gap-2 text-gray-700"><FaCheckCircle className="text-[#0cc0df]" /> Ücretsiz Wi-Fi</li>
                        </ul>
                    </div>

                    {/* Harita (Google Maps iframe) */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-rose-600 mb-2">Konum</h2>
                        <iframe
                            src={`https://www.google.com/maps?q=${encodeURIComponent(pkg.destination)}&output=embed`}
                            className="w-full h-64 rounded-lg"
                        />
                    </div>

                    {/* Paket Şartları */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-rose-600 mb-4">Paket Şartları & İptal Politikası</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Rezervasyon onaylandıktan sonra iptal %50 ceza ile mümkündür.</li>
                            <li>Giriş saatinden önce veya sonra değişiklik yapılamaz.</li>
                            <li>Özel talepler, müsaitlik durumuna göre karşılanır.</li>
                        </ul>
                    </div>
                </div>

                {/* Sağ: Rezervasyon */}
                <div className="bg-white shadow-lg rounded-lg p-6 h-fit">
                    <h3 className="text-xl font-bold mb-4 text-rose-600">Rezervasyon Bilgisi</h3>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Konaklama Süresi</label>
                        <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value as "2gece" | "3gece")}
                            className="border border-gray-300 rounded px-3 py-2 w-full text-sm"
                        >
                            <option value="2gece">2 Gece 3 Gün</option>
                            <option value="3gece">3 Gece 4 Gün</option>
                        </select>
                    </div>

                    <p className="text-2xl font-bold text-[#0cc0df] mb-6">{prices[duration]}₺</p>

                    <Link
                        href={`https://wa.me/905555555555?text=Merhaba,%20${pkg.title}%20paketi%20için%20rezervasyon%20yapmak%20istiyorum.`}
                        target="_blank"
                        className="block text-center bg-[#0cc0df] text-white py-2 rounded hover:bg-[#0ab0ce] transition"
                    >
                        WhatsApp ile Rezervasyon
                    </Link>
                </div>
            </div>
            {/* Benzer Paketler */}
            {packagesData.some(p => p.destination === pkg.destination && p.id !== pkg.id) && (
                <div className="w-[80%] mx-auto py-12">
                    <h2 className="text-2xl font-bold text-rose-600 mb-6">Bu Bölgedeki Diğer Paketler</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {packagesData
                            .filter((p) => p.destination === pkg.destination && p.id !== pkg.id)
                            .map((p) => (
                                <Link
                                    href={`/packages/${p.id}`}
                                    key={p.id}
                                    className="block bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
                                >
                                    <div className="relative w-full h-48">
                                        <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-rose-600">{p.title}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{p.price2N}₺ - {p.price3N}₺</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            )}

        </section>
    );
}
