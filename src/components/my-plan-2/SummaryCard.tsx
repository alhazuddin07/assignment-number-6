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
        <div className="container mx-auto mt-8">

            <div className="card bg-base-100 shadow-md p-8">

                <div className="card-body flex flex-row">

                    <div className="w-1/2">
                        <p className="text-[#8A92A0]">
                            Exercises
                        </p>

                        <p className="text-[#C2F10D] font-bold text-4xl">
                            {totalExercises}
                        </p>
                    </div>

                    <div className="border-l border-gray-300 mx-6"></div>

                    <div className="w-1/2">
                        <p className="text-[#8A92A0]">
                            Minutes
                        </p>

                        <p className="text-4xl font-bold">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="border-l border-gray-300 mx-6"></div>

                    <div className="w-1/2">
                        <p className="text-[#8A92A0]">
                            Calories
                        </p>

                        <p className="text-4xl font-bold">
                            {totalCalories}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SummaryCard;