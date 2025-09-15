'use client'

import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav?: () => void;
    fixed?: boolean;
}

const Nav = ({ openNav, fixed = false }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        if (fixed) {
            setNavBg(true);
            return;
        }

        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            else setNavBg(false);
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, [fixed]);

    return (
        <div className={`${navBg ? 'bg-[#0cc0df] shadow-md' : ''} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
                <div className="relative h-24 w-24 mb-2">
                    <Image
                        src="/images/logoWhite.png"
                        alt="Logo"
                        fill
                        className="object-contain transition-all duration-300"
                    />
                </div>


                {/*Navlinks*/}
                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => {
                        return (
                            <Link href={link.url} key={link.id}>
                                <p className='relative text-white text-base font-medium w-fit block after:block after:content-[""]
                    after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100
                    after:transition duration-300 after:origin-right'>{link.label}</p>
                            </Link>
                        );
                    })}
                </div>

                {/*Buttons*/}
                <div className='flex items-center space-x-4'>
                    <Link href="/contact" className='md:px-12 mp:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200
              transation-all duration-200 rounded-lg cursor-pointer'>
                        Rezervasyon
                    </Link>
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                </div>
            </div>
        </div >
    )
}

export default Nav
