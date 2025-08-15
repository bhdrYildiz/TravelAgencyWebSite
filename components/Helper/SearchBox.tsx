'use client';
import React, { useState } from 'react';
import { FaCalendarWeek, FaMap } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

const SearchBox = () => {
    const options = [
        { value: 'kibris', label: 'Kıbrıs' },
        { value: 'istanbul', label: 'İstanbul' },
        { value: 'kapadokya', label: 'Kapadokya' },
        { value: 'fethiye', label: 'Fethiye' },
    ];

    const personOptions = [
        { value: 1, label: '1 Kişi' },
        { value: 2, label: '2 Kişi' },
        { value: 3, label: '3 Kişi' },
        { value: 4, label: '4 Kişi' },
        { value: 5, label: '5 Kişi' },
        { value: 6, label: '6 Kişi' },
    ];

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
        <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
      items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>

            {/* 1st Search Input - Bölge */}
            <div className='flex items-center space-x-6'>
                <FaMap className='w-6 h-6 text-blue-600' />
                <div className='w-full'>
                    <p className='text-lg font-medium mb-[0.2rem]'>Bölge</p>
                    <Select options={options} placeholder="Bir bölge seçiniz" />
                </div>
            </div>

            {/* 2nd Search Input - Başlangıç Tarihi */}
            <div className='flex items-center space-x-6'>
                <FaCalendarWeek className='w-6 h-6 text-blue-600' />
                <div className='relative w-full'>
                    <p className='text-lg font-medium mb-[0.2rem]'>Başlangıç Tarihi</p>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Tarih seçiniz"
                        className="w-full pl-10 outline-none border border-gray-300 rounded-md py-2 cursor-pointer text-gray-800 focus:ring-2 focus:ring-blue-400"
                        minDate={new Date()}
                    />
                </div>
            </div>

            {/* 3rd Search Input - Bitiş Tarihi */}
            <div className='flex items-center space-x-6'>
                <FaCalendarWeek className='w-6 h-6 text-blue-600' />
                <div className='relative w-full'>
                    <p className='text-lg font-medium mb-[0.2rem]'>Bitiş Tarihi</p>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Tarih seçiniz"
                        className="w-full pl-10 outline-none border border-gray-300 rounded-md py-2 cursor-pointer text-gray-800 focus:ring-2 focus:ring-blue-400"
                        minDate={startDate || new Date()}
                        disabled={!startDate} // Başlangıç seçilmeden Bitiş seçilemez
                    />
                </div>
            </div>

            {/* 4th Search Input - Kişi Sayısı */}

            <div className='flex items-center space-x-6'>
                <FaUserGroup className='w-6 h-6 text-blue-600' />
                <div className='w-full'>
                    <p className='text-lg font-medium mb-[0.2rem]'>Kişi Sayısı</p>
                    <Select
                        options={personOptions}
                        placeholder="Kişi sayısı"
                        className="w-full"
                        classNamePrefix="react-select"
                    />
                </div>
            </div>

        </div>
    );
};

export default SearchBox;
