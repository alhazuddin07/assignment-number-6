import { ICard } from '@/types/gym-type';
import { Clock3, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const getItem = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const ExerciseCard = async () => {

    const allCard = await getItem();
    console.log("all data", allCard);

    return (
        <div className="container mx-auto my-16">
            <h2 className="font-semibold sm:text-3xl md:text-4xl">THE LIBRARY</h2>

            <p className="p-2 text-[#9CA3AF]">
                Twelve lifts covering every major muscle group.
            </p>

            {/* Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {allCard.map((card: ICard) => {
                    return (
                        <Link href={`/libraryWorkoutCard/${card.id}`} key={card.id}>
                            <div className="w-full overflow-hidden hover:border-green-300 hover:scale-99 rounded-[30px] border border-gray-700 bg-[#15171c] text-white shadow-lg">

                                {/* Image */}
                                <div className="relative h-75 w-full">
                                    <Image
                                        src={card.image}
                                        alt={card.name}
                                        fill
                                        sizes='1'
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8">

                                    {/* Muscle Groups */}
                                    <div className="mb-7 flex flex-wrap gap-4">
                                        {card.muscleGroups.map((muscle) => (
                                            <span
                                                key={muscle}
                                                className="rounded-full bg-[#b6ff00] px-6 py-2 text-lg font-bold uppercase text-black"
                                            >
                                                {muscle}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="mb-2 text-2xl font-extrabold uppercase tracking-wide">
                                        {card.name}
                                    </h2>

                                    <p className="text-xl text-gray-400">
                                        {card.equipment}
                                    </p>

                                    <div className="my-8 border-t border-gray-700" />

                                    {/* Stats */}
                                    <div className="flex flex-wrap items-center gap-8 text-lg text-gray-400">
                                        <div className="flex items-center gap-3">
                                            <Clock3 size={28} />
                                            <span>{card.duration} min</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Flame size={28} />
                                            <span>{card.caloriesBurned} kcal</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Star size={28} />
                                            <span>{card.rating}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ExerciseCard;