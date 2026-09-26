
import SavedButton from '@/components/cardDetails/SavedButton';
import TodaysPlanButton from '@/components/cardDetails/TodaysPlanButton';
import { ICard } from '@/types/gym-type';
import Image from 'next/image';


interface ICardDetailPageProps {
    params: Promise<{
        id: string,
    }>
}


const getItem = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}


const DetailPage = async ({ params }: ICardDetailPageProps) => {

    const { id } = await params;
    const cardData = await getItem();
    const card = cardData.find((card: ICard) => String(card.id) === String(id));
    console.log("Card", card);

    return (
        <div className="min-h-screen px-4 py-10 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="grid overflow-hidden rounded-2xl bg-[#111318] md:grid-cols-[1fr_1.15fr]">

                    {/* LEFT - IMAGE */}
                    <div className="relative min-h-105 md:min-h-150]">
                        <Image
                            src={card.image}
                            alt={card.name}
                            fill
                            sizes='1'
                            className="object-cover"
                        />
                    </div>

                    {/* RIGHT - CONTENT */}
                    <div className="p-6 md:p-8">

                        {/* Title */}
                        <h1 className="text-3xl font-extrabold uppercase tracking-tight">
                            {card.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-2 max-w-2xl text-sm leading-5 text-gray-400">
                            {card.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {card.muscleGroups.map((muscle: string) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#b6ff00] px-3 py-1 text-xs font-bold text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Exercise Information */}
                        <div className="mt-5 overflow-hidden rounded-xl border border-gray-800 bg-[#171a20]">

                            {/* Equipment */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                                <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Equipment
                                </span>

                                <span className="text-xs">
                                    {card.equipment}
                                </span>
                            </div>

                            {/* Difficulty */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                                <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Difficulty
                                </span>

                                <span className="text-xs">
                                    {card.difficulty}
                                </span>
                            </div>

                            {/* Sets */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                                <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Sets
                                </span>

                                <span className="text-xs">
                                    {card.sets}
                                </span>
                            </div>

                            {/* Reps */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                                <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Reps
                                </span>

                                <span className="text-xs">
                                    {card.reps}
                                </span>
                            </div>

                            {/* Duration */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                                <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Duration
                                </span>

                                <span className="text-xs">
                                    {card.duration} min
                                </span>
                            </div>

                            {/* Calories */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                                <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Calories
                                </span>

                                <span className="text-xs">
                                    {card.caloriesBurned} kcal
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center justify-between px-4 py-3">
                                <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Rating
                                </span>

                                <span className="text-xs">
                                    {card.rating}
                                </span>
                            </div>

                        </div>

                        {/* Instructions */}
                        <div className="mt-5">
                            <h2 className="text-sm font-bold uppercase">
                                Instructions
                            </h2>

                            <ol className="mt-3 space-y-2">
                                {card.instructions.map((instruction: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 text-xs leading-5 text-gray-400"
                                    >
                                        <span className="shrink-0 text-gray-500">
                                            {index + 1}.
                                        </span>

                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-wrap gap-3">

                            <TodaysPlanButton card={card} />

                            <SavedButton card={card} />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;