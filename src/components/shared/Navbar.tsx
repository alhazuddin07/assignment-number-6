"use client";
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.png'
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathname = usePathname();

    const links = <>
        <li><Link className={pathname === "/" ? "text-[#ccff00]" : ""} href="/">Workouts</Link></li>
        <li><Link className={pathname === "/my-plan" ? "text-[#ccff00] rounded-2xl" : ""}  href="/my-plan">My Plan</Link></li>
    </>

    return (
        <nav className='pt-5'>
            <div className="container mx-auto navbar">
                <div className="navbar-start"> 
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
 
                    <Image
                      src={Logo}
                      height={35}
                      width={35}
                      alt='navImage'
                    />
                    <p className='text-[30px] pl-2'>FITLOG</p>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <Link href="/my-plan">Plan <span className='px-2 py-1 rounded-2xl bg-[#ccff00] text-black'>0</span></Link>
                    <Link href="/my-plan">Saved <span className='px-2 py-1 border border-[#2D313B] rounded-2xl'>0</span></Link>
                </div>
            </div>
            <div className='divider'></div>
        </nav>
    );
};

export default Navbar;