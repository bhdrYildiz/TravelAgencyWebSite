import Image from 'next/image';
import Link from 'next/link';

type Props = {
    id: string;
    image: string;
    title: string;
    date: string;
    excerpt: string;
};

export default function NewsCard({ id, image, title, date, excerpt }: Props) {
    return (
        <Link href={`/blog/${id}`}>
            <div className="cursor-pointer group bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition duration-300 w-[250px] h-[350px]">
                <div className="w-full h-[200px] relative">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-500">{date}</p>
                    <h3 className="text-md font-semibold text-blue-950 mt-1 group-hover:underline">
                        {title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">{excerpt.slice(0, 80)}...</p>
                </div>
            </div>
        </Link>
    );
}
