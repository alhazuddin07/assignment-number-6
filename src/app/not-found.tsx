'use client';
import { Dumbbell, Home } from 'lucide-react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <main className="min-h-167 flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-2xl text-center">

                {/* Icon */}
                <div className="flex justify-center mb-5 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-[#C2F10D]/10 border border-[#C2F10D]/20 flex items-center justify-center">
                        <Dumbbell
                            className="text-[#C2F10D] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                        />
                    </div>
                </div>

                {/* 404 */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-3 md:mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
                    Workout Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 md:mt-4 max-w-md mx-auto px-2 text-sm md:text-base text-[#8A92A0] leading-relaxed">
                    Looks like this workout took a rest day.
                    The page you're looking for doesn't exist or may have been moved.
                </p>

                {/* Back to Home */}
                <div className="mt-7 md:mt-8">
                    <Link
                        href="/"
                        className="btn bg-[#C2F10D] hover:bg-[#b4e20a] text-black border-none px-6 md:px-8"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                </div>

                {/* Branding */}
                <div className="mt-10 md:mt-12 flex items-center justify-center gap-2 text-xs md:text-sm text-[#8A92A0]">
                    <Dumbbell size={15} />
                    <span>FITLOG — Workout Library</span>
                </div>

            </div>
        </main>
    );
};

export default NotFoundPage;