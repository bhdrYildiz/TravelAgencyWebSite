import Link from 'next/link'
import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-200'>
            <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4
        gap-10'>
                {/* 1st part - TÜRSAB Bilgisi */}
                <div className='space-y-3'>
                    <h1 className='text-lg font-bold'>Hakkımızda</h1>
                    <p className='text-sm text-gray-800'>TripStar</p>

                    <p className='text-2xl font-black text-gray-400'>TÜRSAB</p>

                    <a
                        href="https://www.tursab.org.tr/tr/ddsv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-[250px] hover:opacity-90 transition-opacity duration-200"
                    >
                        <img
                            src="/images/tursab.webp"
                            alt="TÜRSAB Dijital Doğrulama"
                            className="rounded shadow"
                        />
                    </a>
                </div>

                {/* 2st part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Support</h1>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-rose-500'>
                        Contact Us
                    </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-rose-500'>
                        Sitemap
                    </p>
                </div>
                {/* 3th part */}
                <div className='flex flex-col items-start mt-4 md:mt-0 space-y-5'>
                    <h1 className='text-lg font-bold'>Hızlı Linkler</h1>
                    <Link href="/packages" className='text-gray-800 hover:text-rose-500 font-medium cursor-pointer text-sm'>
                        Tatil Paketleri
                    </Link>
                    <Link href="/rooms" className='text-gray-800  font-medium cursor-pointer text-sm hover:text-rose-500'>
                        Odalar
                    </Link>
                    <Link href="/activities" className='text-gray-800 font-medium cursor-pointer text-sm hover:text-rose-500'>
                        Aktiviteler
                    </Link>
                    <Link href="/blog" className='text-gray-800 font-medium cursor-pointer text-sm hover:text-rose-500'>
                        Blog
                    </Link>
                    <Link href="/contact" className='text-gray-800 font-medium cursor-pointer text-sm hover:text-rose-500'>
                        İletişim
                    </Link>
                </div>
                {/* 4th part */}
                <div>
                    <h1 className='text-lg font-bold'>İletişim</h1>
                    <div className='mt-6'>
                        <h1 className='text:sm text-gray-600'>Mobil Numaramız</h1>
                        <h1 className='text-base font-bold text-blue-950 mt-1'>
                            +90 530 389 7163
                        </h1>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text:sm text-gray-600'>Email</h1>
                        <h1 className='text-base font-bold text-blue-950 mt-1'>
                            info@yildizhotel.com
                        </h1>
                    </div>
                </div>
            </div>
            {/* Bottom Section */}
            <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center
            text-gray-600 text-sm'>
                <p className='text-center md:text-left'>
                    Copyright 2025 by Byildiz. All rights reserved
                </p>
                <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                    <span>Social :</span>
                    <Link href="#" className='text-gray-500 hover:text-gray-800'>
                        <FaFacebook />
                    </Link>
                    <Link href="#" className='text-gray-500 hover:text-gray-800'>
                        <FaTwitter />
                    </Link>
                    <Link href="#" className='text-gray-500 hover:text-gray-800'>
                        <FaDribbble />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer