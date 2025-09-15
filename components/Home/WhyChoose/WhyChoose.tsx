'use client'

import Image from 'next/image'
import React from 'react'

type CardProps = {
    image: string
    title: string
    description: string
}

const WhyChoose = () => {
    const cardData: CardProps[] = [
        { image: '/images/c1.svg', title: 'En iyi Fiyat Garantisi', description: 'Kapadokya bölgesindeki en uygun fiyata sahip tatil paketlerini biz sunuyoruz.' },
        { image: '/images/c2.svg', title: 'Kolay ve Hızlı Rezervasyon', description: "Kolay, Hızlı ulaşılabilir rezervasyon ile tatilinizi hemen planlayın" },
        { image: '/images/c3.svg', title: '7/24 Danışmanlık Hizmeti', description: "Tatiliniz ile ilgili her şey için 24 saat sorularınıza cevap alabilirsiniz." },
    ]

    return (
        <div className='pt-16 pb-24'>
            <div className='w-[80%] mx-auto'>
                <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>Neden Biz?</h1>
                <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>
                    Kapadokya&apos;da en uygun ve en iyi hizmetin garantisini veriyoruz.
                </p>
            </div>

            <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        data-aos-delay={index * 150}
                    >
                        <div>
                            <Image
                                src={card.image}
                                width={70}
                                height={70}
                                alt='image'
                                className='mx-auto'
                            />
                            <h1 className='mt-6 text-center text-gray-900 font-medium text-lg'>{card.title}</h1>
                            <p className='mt-2 text-center text-xs font-medium text-gray-700'>
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChoose
