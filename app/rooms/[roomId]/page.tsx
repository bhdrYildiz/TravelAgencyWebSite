
"use client";

import Nav from '@/components/Home/Navbar/Nav';
import { roomsData } from '@/data/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useParams } from 'next/navigation';


export default function RoomDetail() {
    const { roomId } = useParams();
    const room = roomsData.find((room) => room.id === (roomId));

    if (!room) return notFound();

    return (
        <>
            <Nav fixed />

            {/* Banner Section */}
            <section
                className="w-full h-[450px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${room.images?.[0]})` }}
            >
                <h1 className="text-4xl md:text-4xl font-bold text-[#f1efef] drop-shadow">{room.name}</h1>
            </section>

            {/* Slider */}
            <section className="bg-gray-100 py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        loop
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {room.images?.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-[300px] md:h-[400px] rounded overflow-hidden">
                                    <Image
                                        src={img}
                                        alt={`Oda görseli ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Description & Features */}
            <section className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
                <h2 className="text-2xl font-bold mb-4">{room.name}</h2>

                <h3 className="text-xl font-semibold mb-2">Oda Özellikleri</h3>
                <h4 className="text-base mb-4 space-y-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat assumenda deleniti dolorem ducimus veritatis ullam labore aliquid libero quia. Debitis neque, doloribus iste veritatis dicta nam possimus esse accusamus sapiente repudiandae expedita, vitae tenetur voluptas.</h4>
                <ul className="list-disc ml-5 space-y-1">
                    {room.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
                </ul>

                <p className="mt-6 text-lg font-bold text-rose-600">Fiyat: {room.price}</p>
            </section>
        </>
    );
}
