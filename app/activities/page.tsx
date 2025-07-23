import Nav from '@/components/Home/Navbar/Nav';
import { activitiesData } from '@/data/data';
import ActivityCard from './ActivityCard';
import Image from 'next/image';

export default function ActivitiesPage() {
    return (
        <>
            <Nav fixed />

            <div className="pt-[6vh]">
                {/* Hero */}
                <div className="relative w-full h-[40vh]">
                    <Image
                        src="/images/tur40.jpg"
                        alt="Aktiviteler Hero"
                        layout="fill"
                        objectFit="cover"
                        className="brightness-50"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <h1 className="text-white text-4xl sm:text-4xl font-bold tracking-widest">
                            TURLAR & AKTİVİTELER
                        </h1>
                    </div>
                </div>

                {/* Activities List */}
                <section className="w-[80%] mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {activitiesData.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </section>

            </div>
        </>
    );
}
