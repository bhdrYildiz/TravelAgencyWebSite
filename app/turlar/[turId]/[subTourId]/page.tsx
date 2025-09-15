"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { subTours } from "@/data/data";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiOutlineCheckCircle, AiOutlineCreditCard, AiOutlineMail, AiOutlineEnvironment, AiOutlinePhone, AiFillStar } from 'react-icons/ai';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 5,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


export default function SubTourDetailPage() {
    const [selectedDate, setSelectedDate] = useState("");
    const [personCount, setPersonCount] = useState(1);
    const { turId, subTourId } = useParams();

    const tour = subTours.find(st => st.id === subTourId && st.categoryId === turId);
    if (!tour) return notFound();

    const included = ["Ulaşım", "Rehberlik", "Kahvaltı"];
    const excluded = ["Öğle yemeği", "Akşam yemeği", "Kişisel harcamalar"];
    const gallery = tour.images;

    return (
        <>
            <main className="bg-white font-cormorant">
                {/* Banner */}
                <section
                    className="w-full h-[45vh] bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${tour.images[0]})` }}
                >
                    <h1 className="text-white text-4xl font-bold drop-shadow text-center ">
                        {tour.title}
                    </h1>
                </section>

                {/* Main Content */}
                <section className="max-w-6xl mx-auto p-4 py-16 grid lg:grid-cols-3 gap-10">
                    {/* Left - Content */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Tur Detayları */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#0cc0df] text-center md:text-left">Tur Detayları</h2>
                            <div className="text-blue-900 mt-4 leading-relaxed text-center md:text-left">
                                {tour.tourDetails.split('\n\n').map((p, i) => (
                                    <p key={i} className="mb-4 text-gray-700">{p}</p>
                                ))}
                            </div>
                        </div>

                        {/* Tur Programı */}
                        {tour.program && tour.program.length > 0 && (
                            <div>
                                <h3 className="text-3xl font-semibold text-[#0cc0df] mb-4 text-center md:text-left">
                                    Tur Programı
                                </h3>
                                <Accordion>
                                    {tour.program.map((item, i) => (
                                        <AccordionItem key={i} title={item.title} defaultOpen={false}>
                                            <p className="text-base text-gray-700">{item.description}</p>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        )}

                        {/* Dahiller / Hariçler */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-xl font-semibold text-[#0cc0df] mb-2">Dahiller</h4>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                    {included.map((inc, i) => <li key={i}>{inc}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-[#0cc0df] mb-2">Hariçler</h4>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                    {excluded.map((exc, i) => <li key={i}>{exc}</li>)}
                                </ul>
                            </div>
                        </div>

                        {/* Fotoğraf Galerisi */}
                        {gallery.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-semibold text-[#0cc0df] mb-4">Fotoğraf Galerisi</h3>

                                <Carousel
                                    swipeable={true}
                                    draggable={true}
                                    showDots={true}
                                    responsive={responsive}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={3000}
                                    keyBoardControl={true}
                                    containerClass="carousel-container"
                                    itemClass="px-2"
                                >
                                    {gallery.map((img, i) => (
                                        <div key={i} className="relative w-full pb-[100%]">
                                            <Image
                                                src={img}
                                                alt={tour.title}
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        )}
                        {/* Yorumlar */}
                        <div>
                            <h3 className="text-2xl font-semibold text-[#0cc0df] mb-4">Yorumlar</h3>
                            {tour.reviews && tour.reviews.length > 0 ? (
                                tour.reviews.map((review, i) => (
                                    <div key={i} className="bg-white rounded-lg p-4 shadow mb-4">
                                        <div className="flex items-center gap-2 text-[#1f2c42]">
                                            {Array(5)
                                                .fill(0)
                                                .map((_, starIndex) => (
                                                    <AiFillStar
                                                        key={starIndex}
                                                        size={16}
                                                        className={starIndex < review.rating ? "text-rose-600" : "text-gray-300"}
                                                    />
                                                ))}
                                        </div>
                                        <p className="mt-2 text-gray-800">{review.text}</p>
                                        <span className="block mt-1 text-sm text-gray-500">
                                            – {review.name}, {review.date}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">Henüz yorum yok.</p>
                            )}
                        </div>

                    </div>

                    {/* Right - Booking Sidebar */}
                    <div className="space-y-6 sticky top-24 self-start">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold text-[#0cc0df] mb-2">Online Rezervasyon</h4>
                            <p className="text-rose-600 text-2xl font-bold mb-1">{tour.price}</p>
                            <p className="text-sm text-gray-600 mb-4">Kişi başı – 24 saat öncesine kadar ücretsiz iptal</p>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full mb-2 p-2 border border-gray-300 rounded"
                            />
                            <div className="mb-4">
                                <label htmlFor="personCount" className="block text-gray-500 mb-1">Kişi Sayısı*</label>
                                <input
                                    type="number"
                                    id="personCount"
                                    min={1}
                                    max={10}
                                    value={personCount}
                                    onChange={(e) => setPersonCount(parseInt(e.target.value))}
                                    className="w-full p-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-[#1f2c42] transition"
                                    placeholder="1"
                                />
                            </div>
                            <button className="w-full cursor-pointer bg-rose-600 hover:bg-rose-700 text-white py-2 rounded transition-all duration-300">
                                Müsaitliği Kontrol Et
                            </button>
                        </div>

                        {/* Özellikler */}
                        <div className="space-y-3 text-[#1f2c42] text-sm">
                            <div className="flex items-center gap-2">
                                <AiOutlineCheckCircle size={16} className="text-[#1f2c42]" />
                                <span>Ücretsiz İptal</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <AiOutlineCreditCard size={16} className="text-[#1f2c42]" />
                                <span>Sonra Ödeme Seçeneği</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <AiOutlineEnvironment size={16} className="text-[#1f2c42]" />
                                <span>Otelden alma hizmeti dahildir</span>
                            </div>

                            {/* İletişim Bilgileri */}
                            <div className="mt-4 border-t border-gray-200 pt-4 space-y-2">
                                <div className="flex items-center gap-2">
                                    <AiOutlinePhone size={16} className="text-[#1f2c42]" />
                                    <a href="tel:+905303897163" className="hover:underline">+90 530 389 7163</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <AiOutlineMail size={16} className="text-[#1f2c42]" />
                                    <a href="mailto:info@yildizhotel.com" className="hover:underline">info@tatilim.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
