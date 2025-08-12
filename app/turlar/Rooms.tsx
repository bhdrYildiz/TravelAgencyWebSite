import React from "react";
import { toursData } from "@/data/data";
import RoomCard from "./RoomCard";

const Rooms = () => {
    return (
        <section className="rooms-section">
            {/* Hero Section */}
            <div
                className="w-full h-[45vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url('/images/balon3.jpg')` }}
            >
                <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-widest z-10 mt-12">
                    Turlar ve Tatil Yerleri
                </h1>
            </div>

            {/* Cards */}
            <div className="w-[80%] mx-auto py-20 flex flex-col gap-8">
                {toursData.map((tour, i) => (
                    <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                        <RoomCard tour={tour} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Rooms;
