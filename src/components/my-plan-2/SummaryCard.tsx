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
        <div className="container mx-auto mt-6 md:mt-8 sm:px-4 lg:px-0">

            <div className="card bg-base-100 shadow-md p-4 md:p-6 lg:p-8">

                <div className="card-body flex flex-col md:flex-row items-center justify-center text-center gap-6 md:gap-0">

                    <div className="w-full md:w-1/3">
                        <p className="text-[#8A92A0]">
                            Exercises
                        </p>

                        <p className="text-[#C2F10D] font-bold text-3xl md:text-4xl">
                            {totalExercises}
                        </p>
                    </div>

                    <div className="hidden md:block border-l border-gray-300 h-16"></div>

                    <div className="w-full md:w-1/3">
                        <p className="text-[#8A92A0]">
                            Minutes
                        </p>

                        <p className="text-3xl md:text-4xl font-bold">
                            {totalMinutes}
                        </p>
                    </div>

   
                    <div className="hidden md:block border-l border-gray-300 h-16"></div>

                    <div className="w-full md:w-1/3">
                        <p className="text-[#8A92A0]">
                            Calories
                        </p>

                        <p className="text-3xl md:text-4xl font-bold">
                            {totalCalories}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SummaryCard;