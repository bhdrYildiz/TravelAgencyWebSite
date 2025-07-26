import Nav from '@/components/Home/Navbar/Nav';
import { activitiesData } from '@/data/data';
import ActivityCard from './ActivityCard';
import Image from 'next/image';

export default function ActivitiesPage() {
    return (
        <>
            <section className="activities-section">
                {/* Hero */}
                <div
                    className="relative w-full h-[45vh] bg-fixed bg-center bg-cover flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/tur40.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <h1 className="relative z-10 text-white text-4xl sm:text-4xl font-bold tracking-widest mt-10">
                        TURLAR & AKTİVİTELER
                    </h1>
                </div>


                {/* Activities List */}
                <section className="w-[80%] mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {activitiesData.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </section>

            </section>
        </>
    );
}
