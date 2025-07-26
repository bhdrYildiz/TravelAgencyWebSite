import React from 'react';
import NewsCard from './NewsCard';
import { blogPosts } from '@/data/data';

const News = () => {
    const latestPosts = [...blogPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 4);

    return (
        <div className='pt-16 pb-16'>
            {/* Section Heading */}
            <div className='w-[80%] mx-auto'>
                <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>Kapadokya ve Bölge Hakkında Ayrıntılı Yazılar</h1>
                <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>
                    Bölgeyi daha yakından tanımak için sizin için yazdıklarımıza bir göz atın..
                </p>
            </div>

            {/* Blog Kartları */}
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20'>
                {latestPosts.map((post, index) => (
                    <div
                        key={post.id}
                        data-aos="fade-left"
                        data-aos-anchor-placement="top-center"
                        data-aos-delay={index * 100}
                    >
                        <NewsCard
                            id={post.id}
                            image={post.image}
                            title={post.title}
                            date={new Date(post.date).toLocaleDateString('tr-TR')}
                            excerpt={post.excerpt}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
