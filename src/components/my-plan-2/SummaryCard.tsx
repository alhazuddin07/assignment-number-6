'use client';

import { CardsContext } from '@/context/CardsProvider';
import { ICard } from '@/types/gym-type';
import { useContext } from 'react';

const SummaryCard = () => {
    const { todaysPlan, saveLater } = useContext(CardsContext) as {
        todaysPlan: ICard[];
        saveLater: ICard[];
    };

    const allPlans = [...todaysPlan, ...saveLater];

    const totalExercises = allPlans.length;

    const totalMinutes = allPlans.reduce(
        (total: number, card: ICard) => {
            return total + card.duration;
        },
        0
    );

    const totalCalories = allPlans.reduce(
        (total: number, card: ICard) => {
            return total + card.caloriesBurned;
        },
        0
    );

    return (
        <div className="container mx-auto mt-5 sm:mt-6 md:mt-8 lg:mt-8 px-4 sm:px-4 md:px-6 lg:px-0">

            <div className="card bg-base-100 shadow-md p-3 sm:p-4 md:p-6 lg:p-8">

                <div className="card-body flex flex-col sm:flex-row md:flex-row items-center justify-center text-center gap-5 sm:gap-0 md:gap-0">

                    <div className="w-full sm:w-1/3 md:w-1/3">
                        <p className="text-[#8A92A0] text-sm sm:text-base">
                            Exercises
                        </p>

                        <p className="text-[#C2F10D] font-bold text-2xl sm:text-3xl md:text-4xl">
                            {totalExercises}
                        </p>
                    </div>

                    <div className="hidden sm:block border-l border-gray-300 h-12 md:h-16"></div>

                    <div className="w-full sm:w-1/3 md:w-1/3">
                        <p className="text-[#8A92A0] text-sm sm:text-base">
                            Minutes
                        </p>

                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="hidden sm:block border-l border-gray-300 h-12 md:h-16"></div>

                    <div className="w-full sm:w-1/3 md:w-1/3">
                        <p className="text-[#8A92A0] text-sm sm:text-base">
                            Calories
                        </p>

                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            {totalCalories}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SummaryCard;