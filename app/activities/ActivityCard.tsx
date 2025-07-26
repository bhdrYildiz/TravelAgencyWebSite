'use client';
import Image from 'next/image';
import { Activity } from '@/data/data';
import Link from 'next/link';

export default function ActivityCard({ activity }: { activity: Activity }) {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
                <Image
                    src={activity.images[0]}
                    alt={activity.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold text-rose-600">{activity.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{activity.description}</p>

                <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
                    <span>⏱ {activity.duration}</span>
                    <span>💸 {activity.price}₺</span>
                </div>

                <Link href={`/activities/${activity.id}`}>
                    <button className="mt-4 w-full bg-rose-600 text-white py-2 rounded hover:bg-rose-700 transition cursor-pointer">
                        Detayları Gör
                    </button>
                </Link>
            </div>
        </div>
    );
}
