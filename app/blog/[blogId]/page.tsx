"use client";

import { blogPosts } from '@/data/data';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function BlogDetailPage() {
    const { blogId } = useParams();
    const blog = blogPosts.find((p) => p.id === blogId);

    if (!blog) return notFound();

    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const recentPosts = sortedPosts.slice(0, 4).filter(p => p.id !== blogId);

    return (
        <>
            <section className="blogid-section">
                {/* Hero */}
                <div className="relative w-full h-[45vh]">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        layout="fill"
                        objectFit="cover"
                        className="brightness-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-xl md:text-2xl font-bold text-center px-4">{blog.title}</h1>
                    </div>
                </div>

                {/* İçerik Alanı */}
                <div className="w-[80%] mx-auto py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Sol Tarafta Blog İçeriği */}
                    <div className="lg:col-span-2">
                        <p className="text-sm text-gray-500 mb-4">
                            {new Date(blog.date).toLocaleDateString('tr-TR')}
                        </p>
                        <div className="prose prose-blog max-w-none">
                            <ReactMarkdown>
                                {blog.content}
                            </ReactMarkdown>
                        </div>
                    </div>

                    {/* Sağ Tarafta Son Eklenenler */}
                    <div className="bg-[#f9f9f9] rounded p-6 shadow-md">
                        <h3 className="text-lg font-bold border-l-4 border-rose-500 text-rose-500 pl-3 mb-6">Son Eklenenler</h3>
                        <ul className="space-y-5">
                            {recentPosts.map((post) => (
                                <li key={post.id} className="flex gap-3 items-start">
                                    {/* Görsel */}
                                    <div className="w-[80px] h-[60px] relative flex-shrink-0 rounded overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Bilgi Alanı */}
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-1">
                                            {new Date(post.date).toLocaleDateString('tr-TR')}
                                        </p>

                                        <Link href={`/blog/${post.id}`}>
                                            <span className="text-sm font-medium text-blue-900 hover:underline block">
                                                {post.title.length > 45
                                                    ? post.title.slice(0, 42) + "..."
                                                    : post.title}
                                            </span>
                                        </Link>

                                        {/* excerpt burada */}
                                        <p className="text-xs text-gray-700 mt-1 line-clamp-2">
                                            {post.excerpt}
                                        </p>
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
