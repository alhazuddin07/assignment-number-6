"use client";
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.png'
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { CardsContext } from '@/context/CardsProvider';
import { ICard } from '@/types/gym-type';

const Navbar = () => {

    const pathname = usePathname();
    const { todaysPlan, saveLater } = useContext(CardsContext) as {
        todaysPlan: ICard[];
        saveLater: ICard[];
    };

    const links = <>
        <li><Link className={pathname === "/" ? "text-[#ccff00] text-[16px] sm:text-[17px] md:text-[18px] bg-[#1A2312] rounded-2xl px-4 sm:px-5" : "text-white text-[16px] sm:text-[17px] md:text-[18px]"} href="/">Workouts</Link></li>
        <li><Link className={pathname === "/my-plan" ? "text-[#ccff00] text-[16px] sm:text-[17px] md:text-[18px] bg-[#1A2312] rounded-2xl px-5 sm:px-6" : "text-white text-[16px] sm:text-[17px] md:text-[18px]"} href="/my-plan">My Plan</Link></li>
    </>

    return (
        <nav className='p-2 sm:p-3 sticky top-0 z-50 bg-black border-b border-[#2D313B]'>

            <div className="container mx-auto navbar min-h-16 px-1 sm:px-2 md:px-3 lg:px-0">

                <div className="navbar-start sm:gap-3 md:gap-0">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-5 sm:px-3">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-9 sm:w-9 text-white border border-[#ccff00] p-2 rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-48 sm:w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    <Image
                        src={Logo}
                        height={40}
                        width={40}
                        alt='navImage'
                        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                    />

                    <p className='text-[22px] sm:text-[26px] md:text-[30px] md:pl-3 text-white'>
                        FITLOG
                    </p>

                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-2 sm:gap-3 md:gap-4">

                    <Link href="/my-plan" className='text-white text-[14px] sm:text-[16px] md:text-[18px]'>
                        Plan <span className='px-2 py-1 rounded-2xl bg-[#ccff00] text-black'>
                            {todaysPlan.length}
                        </span>
                    </Link>

                    <Link href="/my-plan" className='text-white text-[14px] sm:text-[16px] md:text-[18px]'>
                        Saved <span className='px-2 py-1 border border-[#4f5258] rounded-2xl text-white'>
                            {saveLater.length}
                        </span>
                    </Link>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;