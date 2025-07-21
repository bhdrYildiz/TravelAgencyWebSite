import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
    return (
        <div className='pt-16 pb-16'>
            {/* Section Heading */}
            <div className='w-[80%] mx-auto'>
                <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>Kapadokya ve Bölge Hakkında Ayrıntılı Yazılar</h1>
                <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>
                    Bölgeyi daha yakından tanımak için sizin için yazdıklarımıza bir göz atın..
                </p>
            </div>            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10
            items-center mt-20'>
                <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                    <NewsCard
                        image="/images/tur12.jpg"
                        title="Kapadokya'da görülmesi gereken 10 yer"
                        date="15 Mayıs 2025"
                    />
                </div>
                <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <NewsCard
                        image="/images/tur40.jpg"
                        title="Kapadokya'nın Oluşumu"
                        date="21 Mart 2025"
                    />
                </div>
                <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <NewsCard
                        image="/images/tur5.jpg"
                        title="Kapadokya'da Balon Turu"
                        date="13 Şubat 2025"
                    />
                </div>
                <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <NewsCard
                        image="/images/tur11.jpg"
                        title="Kapadokya Tatili"
                        date="7 Ocak 2025"
                    />
                </div>
            </div>
        </div>
    );
};

export default News