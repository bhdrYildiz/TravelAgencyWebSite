import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='pt-16 pb-10 bg-gray-900 text-gray-300'>
            <div className='w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                {/* Hakkımızda */}
                <div className='space-y-3'>
                    <h2 className='text-xl font-bold text-white'>Hakkımızda</h2>
                    <p className='text-gray-400'>TripStar</p>
                    <p className='text-2xl font-black text-gray-600'>TÜRSAB</p>
                    <a
                        href="https://www.tursab.org.tr/tr/ddsv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-[200px] hover:opacity-80 transition-opacity duration-200"
                    >
                        <Image
                            src="/images/tursab.webp"
                            alt="TÜRSAB Dijital Doğrulama"
                            width={200}
                            height={100}
                            className="rounded shadow h-auto w-full"
                        />
                    </a>
                </div>

                {/* Support */}
                <div className='space-y-3'>
                    <h2 className='text-xl font-bold text-white'>Support</h2>
                    <p className='text-gray-400 font-medium text-sm hover:text-rose-500 cursor-pointer transition'>
                        Contact Us
                    </p>
                    <p className='text-gray-400 font-medium text-sm hover:text-rose-500 cursor-pointer transition'>
                        Sitemap
                    </p>
                </div>

                {/* Hızlı Linkler */}
                <div className='space-y-3'>
                    <h2 className='text-xl font-bold text-white'>Hızlı Linkler</h2>
                    <Link href="/packages" className='block text-gray-400 hover:text-rose-500 font-medium text-sm transition'>Tatil Paketleri</Link>
                    <Link href="/rooms" className='block text-gray-400 hover:text-rose-500 font-medium text-sm transition'>Odalar</Link>
                    <Link href="/activities" className='block text-gray-400 hover:text-rose-500 font-medium text-sm transition'>Aktiviteler</Link>
                    <Link href="/blog" className='block text-gray-400 hover:text-rose-500 font-medium text-sm transition'>Blog</Link>
                    <Link href="/contact" className='block text-gray-400 hover:text-rose-500 font-medium text-sm transition'>İletişim</Link>
                </div>

                {/* İletişim */}
                <div className='space-y-5'>
                    <h2 className='text-xl font-bold text-white'>İletişim</h2>
                    <div>
                        <h3 className='text-gray-400 text-sm'>Mobil Numaramız</h3>
                        <p className='text-blue-400 font-bold text-base mt-1'>+90 530 389 7163</p>
                    </div>
                    <div>
                        <h3 className='text-gray-400 text-sm'>Email</h3>
                        <p className='text-blue-400 font-bold text-base mt-1'>info@yildizhotel.com</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='mt-12 w-[85%] mx-auto border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm'>
                <p className='text-center md:text-left'>
                    © 2025 By Yildiz. All rights reserved.
                </p>
                <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                    <span>Social:</span>
                    <Link href="#" className='text-gray-400 hover:text-white transition'>
                        <FaFacebook className='w-5 h-5' />
                    </Link>
                    <Link href="#" className='text-gray-400 hover:text-white transition'>
                        <FaTwitter className='w-5 h-5' />
                    </Link>
                    <Link href="#" className='text-gray-400 hover:text-white transition'>
                        <FaDribbble className='w-5 h-5' />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
