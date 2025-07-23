// app/blog/[slug]/page.tsx
import { blogPosts } from '@/data/data';
import { notFound } from "next/navigation";
import Image from "next/image";
import Nav from "@/components/Home/Navbar/Nav";

type Props = {
    params: {
        slug: string;
    };
};

export default function BlogDetailPage({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) return notFound();

    return (
        <>
            <Nav fixed />
            <div className="pt-[12vh] w-[80%] mx-auto">
                <div className="relative w-full h-[45vh] mb-10">
                    <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-4xl sm:text-5xl font-bold text-center px-4">{post.title}</h1>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-4">{new Date(post.date).toLocaleDateString('tr-TR')}</p>
                    <p>{post.content}</p>
                </div>
            </div>
        </>
    );
}
