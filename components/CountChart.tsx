"use client"

import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 100,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 50,
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count: 40,
        fill: '#C3EBFA',
    },
];

const CountChart = () => {
    return (
        <div className='flex flex-col bg-white rounded-xl w-full h-full'>
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt='' height={20} width={20} />
            </div>
            {/* CHART */}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            {/* BOOTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lama-sky rounded-full" />
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Body (55%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lama-yellow rounded-full" />
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Girls (55%)</h2>
                </div>
            </div>
        </div>
    );
};

export default CountChart;
