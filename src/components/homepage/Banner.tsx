import Image from 'next/image';
import React from 'react';
import BannerLogo from '@/assets/banner.png'
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='sm:px-4 lg:px-0'>
            <div className='container mx-auto bg-[#15171D] rounded-3xl mt-10'>
                <div className='flex justify-between p-12'>
                    <div className='space-y-5 pt-8'>
                        <p className='text-[#C2F800]'>WORKOUT LIBRARY</p>

                        <h1 className='font-bold sm:text-[28px] lg:text-6xl'>TRAIN WITH INTENT. LOG <br /> EVERY SET.</h1>

                        <p className='pb-4 text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                            into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>

                        <Link className='btn bg-[#C2F800] text-black' href="#workouts">BROWSE WORKOUTS</Link>
                    </div>
                    <div className='sm:mt-15 md:mt-0 lg:mt-0'>
                        <Image
                            src={BannerLogo}
                            width={400}
                            height={400}
                            alt='Banner Image'
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;