import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'

const NewsLetter = () => {
    return (
        <div className='bg-black pt-12 pb-12 flex items-center justify-center w-full flex-col'>
            <BsEnvelopePaper className='w-16 h-16 mt-12 text-white' />
            <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest'>
                Bize Ulaşın
            </h1>
            <p className='mt-3 text-white text-xs sm:text-sm'>
                Aklınızdaki Tüm Soruları yanıtlamak için buradayız..
            </p>
            {/* subscription input and buttons */}
            <div className='w-full'>
                <input type='text' className='px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block
                mx-auto rounded-lg outline-none'
                    placeholder='Email'
                />
                <input type='text' className='px-6 py-12 bg-white mt-4 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block
                mx-auto rounded-lg outline-none'
                    placeholder='Mesajınız'
                />
                <button className='px-6 py-3.5 bg-blue-900 text-white hover:bg-blue-950 transition-all duration-200 mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto
                rounded-lg outline-none cursor-pointer'>
                    Gönder
                </button>
            </div>
        </div>
    )
}

export default NewsLetter