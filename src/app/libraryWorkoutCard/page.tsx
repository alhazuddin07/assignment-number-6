import { ICard } from '@/types/gym-type';
import { Clock3, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const getItem = async (): Promise<ICard[]> => {
    try {
        const apiUrl =
            process.env.NEXT_PUBLIC_API_URL ||
            'https://api.api-store.workers.dev/api/fitlog';

        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error('Failed to fetch workout data');
        }

        const data: ICard[] = await res.json();
        return data;
        
    } catch (error) {
        console.error('Error fetching workout data:', error);
        return [];
    }
};

const ExerciseCard = async () => {
    const allCard = await getItem();

    return (
        <div id="workouts" className="container mx-auto my-10 sm:my-12 md:my-14 lg:my-16">

            {/* Heading */}
            <div className="px-4 sm:px-5 md:px-6 lg:px-0">
                <h2 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl">
                    THE LIBRARY
                </h2>

                <p className="p-2 text-sm sm:text-base text-[#9CA3AF]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Grid card */}
            <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-4 px-4 sm:px-5 md:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-0">

                {allCard ?.map((card) => (
                    <Link
                        href={`/libraryWorkoutCard/${card.id}`}
                        key={card.id}
                    >
                        <div className="w-full overflow-hidden rounded-2xl sm:rounded-[25px] lg:rounded-[30px] border border-gray-700 bg-[#15171c] text-white shadow-lg transition-all duration-300 hover:scale-[0.99] hover:border-green-300">

                            <div className="relative h-56 sm:h-64 md:h-64 lg:h-75 w-full">
                                <Image
                                    src={card.image}
                                    alt={card.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-5 sm:p-6 md:p-7 lg:p-8">

                                <div className="mb-5 sm:mb-6 md:mb-7 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                                    {card?.muscleGroups?.map((muscle) => (
                                        <span
                                            key={muscle}
                                            className="rounded-full bg-[#b6ff00] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold uppercase text-black"
                                        >
                                            {muscle}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="mb-2 text-xl sm:text-2xl md:text-[18px] lg:text-2xl font-extrabold uppercase tracking-wide">
                                    {card.name}
                                </h2>

                                <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-400">
                                    {card.equipment}
                                </p>

                                <div className="my-6 sm:my-7 md:my-8 border-t border-gray-700" />

                                <div className="flex flex-wrap items-center gap-3 sm:gap-5 md:gap-4 lg:gap-6 text-sm sm:text-base md:text-base lg:text-lg text-gray-400">

                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Clock3 size={20} className="sm:w-6 sm:h-6" />
                                        <span>
                                            {card.duration} min
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Flame size={20} className="sm:w-6 sm:h-6" />
                                        <span>
                                            {card.caloriesBurned} kcal
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Star size={20} className="sm:w-6 sm:h-6" />
                                        <span>
                                            {card.rating}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ExerciseCard;