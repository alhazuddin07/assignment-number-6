import Image from 'next/image';
import React from 'react';
import FLogo from '@/assets/SVG.svg'

const Footer = () => {
    return (
        <footer>
            <div className='divider'></div>
            <div className='flex justify-between items-center container mx-auto'>
                <div className='flex items-center gap-2 py-8'>
                    <Image
                        src={FLogo}
                        height={25}
                        width={25}
                        alt='footerImage'
                    />
                    <p className='text-[20px]'>FITLOG</p>
                </div>
                <div>
                    <p className='text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;