import Image from 'next/image';
import React from 'react';
import BannerLogo from '@/assets/banner.png'
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='px-4 sm:px-4 md:px-6 lg:px-0'>
            <div className='container mx-auto bg-[#15171D] rounded-2xl sm:rounded-3xl mt-6 sm:mt-8 md:mt-10'>
                <div className='flex flex-col md:flex-row justify-between items-center text-center p-5 sm:p-8 md:p-10 lg:p-12'>

                    <div className='space-y-4 sm:space-y-5 pt-4 sm:pt-6 md:pt-8'>
                        <p className='text-[#C2F800] text-sm sm:text-base'>
                            WORKOUT LIBRARY
                        </p>

                        <h1 className='font-bold text-white text-2xl sm:text-[30px] md:text-4xl lg:text-6xl leading-tight'>
                            TRAIN WITH INTENT. LOG <br /> EVERY SET.
                        </h1>

                        <p className='pb-3 sm:pb-4 text-[#9CA3AF] text-sm sm:text-base leading-6'>
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className='hidden md:block' />
                            into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>

                        <Link className='btn bg-[#C2F800] text-black text-sm sm:text-base' href="#workouts">
                            BROWSE WORKOUTS
                        </Link>
                    </div>

                    <div className='flex justify-center mt-8 sm:mt-10 md:mt-0'>
                        <Image
                            src={BannerLogo}
                            width={400}
                            height={400}
                            alt='Banner Image'
                            className='w-56 sm:w-72 md:w-80 lg:w-[400px] h-auto'
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;