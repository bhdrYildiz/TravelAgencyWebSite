"use client";

import Nav from '@/components/Home/Navbar/Nav';
import { roomsData } from '@/data/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1324, min: 768 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

export default function RoomDetail() {
    const { roomId } = useParams();
    const room = roomsData.find((room) => room.id === roomId);

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

            {/* Carousel Section */}
            <section className="bg-gray-100 py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        className="custom-carousel2"
                    >
                        {room.images?.map((img, index) => (
                            <div key={index} className="m-2">
                                <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                    <Image
                                        src={img}
                                        alt={`Oda görseli ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>

            {/* Description & Features */}
            <section className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
                <h2 className="text-2xl font-bold mb-4">{room.name}</h2>

                <h3 className="text-xl font-semibold mb-2">Oda Özellikleri</h3>
                <h4 className="text-base mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat assumenda deleniti dolorem ducimus veritatis ullam labore aliquid libero quia. Debitis neque, doloribus iste veritatis dicta nam possimus esse accusamus sapiente repudiandae expedita, vitae tenetur voluptas.
                </h4>
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
