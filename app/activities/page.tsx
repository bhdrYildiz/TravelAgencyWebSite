import Nav from '@/components/Home/Navbar/Nav';
import { activitiesData } from '@/data/data';
import ActivityCard from './ActivityCard';
import Image from 'next/image';
import Link from 'next/link';

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
                    </ol>
                </nav>

                {/* Activities List */}
                <section className="w-[80%] mx-auto py-2 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {activitiesData.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </section>

            </section>
        </>
    );
}
