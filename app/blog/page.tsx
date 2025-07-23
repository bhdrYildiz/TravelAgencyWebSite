"use client";

import Link from "next/link";
import { blogPosts } from '@/data/data';
import Image from "next/image";
import Nav from "@/components/Home/Navbar/Nav";

export default function BlogPage() {
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const recentPosts = sortedPosts.slice(0, 4);

    return (
        <>
            <Nav fixed />
            <div className="pt-[12vh]">
                {/* Hero */}
                <div className="relative w-full h-[40vh]">
                    <Image
                        src="/images/tur5.jpg"
                        alt="Blog Hero"
                        layout="fill"
                        objectFit="cover"
                        className="brightness-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-5xl font-bold">Blog</h1>
                    </div>
                </div>

                {/* İçerik Alanı */}
                <div className="w-[80%] mx-auto py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Blog Kartları */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                        {sortedPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded shadow overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={500}
                                    height={500}
                                    className="w-full h-[200px] object-cover"
                                />
                                <div className="p-4">
                                    <p className="text-sm text-gray-500 mb-1">
                                        {new Date(post.date).toLocaleDateString('tr-TR')}
                                    </p>
                                    <h2 className="text-lg font-semibold text-blue-950">{post.title}</h2>
                                    <p className="text-sm text-gray-600 mt-1">{post.excerpt.slice(0, 80)}...</p>
                                    <Link href={`/blog/${post.id}`}>
                                        <span className="text-orange-600 font-medium text-sm inline-block mt-3 hover:underline">
                                            Detaylar →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Son Eklenenler */}
                    <div className="bg-[#f9f9f9] rounded p-6 shadow-md">
                        <h3 className="text-lg font-bold text-blue-900 border-l-4 border-orange-500 pl-3 mb-6">Son Eklenenler</h3>
                        <ul className="space-y-5">
                            {recentPosts.map((post) => (
                                <li key={post.id} className="flex gap-3 items-center">
                                    <div className="w-[80px] h-[60px] relative flex-shrink-0 rounded overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-1">{new Date(post.date).toLocaleDateString('tr-TR')}</p>
                                        <Link href={`/blog/${post.id}`}>
                                            <span className="text-sm font-medium text-blue-900 hover:underline">
                                                {post.title.length > 45
                                                    ? post.title.slice(0, 42) + "..."
                                                    : post.title}
                                            </span>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
