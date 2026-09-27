import Image from 'next/image';
import React from 'react';
import FLogo from '@/assets/SVG.svg';

const Footer = () => {
    return (
        <footer className='border-t border-[#2D313B] bg-black'>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-5 md:p-4 lg:p-0">
                
                <div className="flex items-center gap-2 py-6 sm:py-7 md:py-8">
                    <Image
                        src={FLogo}
                        height={25}
                        width={25}
                        alt="footerImage"
                    />
                    <p className="text-[18px] sm:text-[19px] md:text-[20px] text-white">FITLOG</p>
                </div>

                <div className="text-center md:text-right pb-6 sm:pb-7 md:pb-0">
                    <p className="text-[#6B7280] text-sm sm:text-base md:text-base">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;