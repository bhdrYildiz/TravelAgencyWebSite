"use client";

import Link from "next/link";
import { blogPosts } from '@/data/data';
import Image from "next/image";

export default function BlogPage() {
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const recentPosts = sortedPosts.slice(0, 4);

    return (
        <>
            <section className="blog-section">
                {/* Hero */}
                <div
                    className="relative w-full h-[45vh] bg-fixed bg-center bg-cover flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/red2.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <h1 className="relative z-10 text-white text-4xl sm:text-4xl font-bold tracking-widest mt-10">
                        BLOG
                    </h1>
                </div>


                {/* İçerik Alanı */}
                <div className="w-[80%] mx-auto py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Blog Kartları */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                        {sortedPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded shadow overflow-hidden">
                                <Link href={`/blog/${post.id}`}>
                                    <div className="relative w-full h-[320px] hover:opacity-80 transition-opacity duration-200">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </Link>
                                <div className="p-4">
                                    <p className="text-sm text-gray-500 mb-1">
                                        {new Date(post.date).toLocaleDateString('tr-TR')}
                                    </p>
                                    <h2 className="text-lg font-semibold text-blue-950">{post.title}</h2>
                                    <p className="text-sm text-gray-600 mt-1">{post.excerpt.slice(0, 80)}...</p>
                                    <Link href={`/blog/${post.id}`}>
                                        <span className="text-rose-500 font-medium text-sm inline-block mt-3 hover:underline">
                                            Detaylar →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Son Eklenenler */}
                    <div className="bg-[#f9f9f9] rounded p-6 shadow-md">
                        <h3 className="text-lg font-bold border-l-4 text-rose-500 pl-3 mb-6">Son Eklenenler</h3>
                        <ul className="space-y-5">
                            {recentPosts.map((post) => (
                                <li key={post.id} className="flex gap-3 items-center">
                                    <div className="w-[90px] h-[90px] relative flex-shrink-0 rounded overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('tr-TR')}</p>
                                        <Link href={`/blog/${post.id}`}>
                                            <span className="text-sm font-medium text-blue-900 hover:text-rose-500 hover:underline transition-colors duration-200">
                                                {post.title.length > 45
                                                    ? post.title.slice(0, 42) + "..."
                                                    : post.title}
                                            </span>
                                            <p className="text-xs text-gray-600 mt-1">{post.excerpt.slice(0, 80)}...</p>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
