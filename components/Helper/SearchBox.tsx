import React from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
    return (
        <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
            {/* 1st Search Input */}
            <div className='flex items-center space-x-6'>
                <FaMap className='w-6 h-6 text-blue-600' />
                <div>
                    <p className='text-lg font-medium mb-[0.2rem]'>Bölge</p>
                    <input
                        type='text'
                        placeholder='Nereye gitmek istersiniz?'
                        className='outline-none border-none placeholder:text-gray-800'
                    />
                </div>
            </div>
            {/* 2nd search input */}
            <div className='flex items-center space-x-6'>
                <FaCalendarWeek className='w-6 h-6 text-blue-600' />
                <div>
                    <p className='text-lg font-medium mb-[0.2rem]'>Başlangıç Tarihi</p>
                    <input
                        type='date'
                        className='outline-none border-none'
                    />
                </div>
            </div>
            {/* 3rd search input */}
            <div className='flex items-center space-x-6'>
                <FaCalendarWeek className='w-6 h-6 text-blue-600' />
                <div>
                    <p className='text-lg font-medium mb-[0.2rem]'>Bitiş Tarihi</p>
                    <input
                        type='date'
                        className='outline-none border-none'
                    />
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <FaUserGroup className='w-6 h-6 text-blue-600' />
                <div>
                    <p className='text-lg font-medium mb-[0.2rem]'>Kişi Sayısı</p>
                    <select
                        className='text-base font-normal bg-transparent outline-none border border-gray-300 rounded-md px-3 py-1 cursor-pointer'
                        defaultValue="1"
                    >
                        {[...Array(6)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SearchBox