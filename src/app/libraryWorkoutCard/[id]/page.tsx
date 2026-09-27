import SavedButton from '@/components/cardDetails/SavedButton';
import TodaysPlanButton from '@/components/cardDetails/TodaysPlanButton';
import { ICard } from '@/types/gym-type';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ICardDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getItem = async () => {

    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
    const data = await res.json();
    return data;

};


const DetailPage = async ({ params }: ICardDetailPageProps) => {

    const { id } = await params;

    const cardData = await getItem();

    const card = cardData.find((card: ICard)=> String(card.id) === String(id));

    if (!card) {

        notFound();

    }

    return (
        <div className="min-h-screen px-3 sm:px-4 md:px-6 lg:px-4 py-6 sm:py-8 md:py-10 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="grid overflow-hidden rounded-xl sm:rounded-2xl bg-[#111318] md:grid-cols-[1fr_1.15fr]">

                    <div className="relative min-h-75 sm:min-h-90 md:min-h-125 lg:min-h-150">
                        <Image
                            src={card.image}
                            alt={card.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="p-4 sm:p-5 md:p-8">

                        <h1 className="text-2xl sm:text-3xl md:text-3xl font-extrabold uppercase tracking-tight">
                            {card.name}
                        </h1>

                        <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-5 text-gray-400">
                            {card.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {card.muscleGroups.map((muscle: string) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#b6ff00] px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 sm:mt-5 overflow-hidden rounded-xl border border-gray-800 bg-[#171a20]">

                            <div className="flex items-center justify-between border-b border-gray-800 px-3 sm:px-4 py-3">
                                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Equipment
                                </span>

                                <span className="text-[11px] sm:text-xs text-right">
                                    {card.equipment}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-800 px-3 sm:px-4 py-3">
                                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Difficulty
                                </span>

                                <span className="text-[11px] sm:text-xs">
                                    {card.difficulty}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-800 px-3 sm:px-4 py-3">
                                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Sets
                                </span>

                                <span className="text-[11px] sm:text-xs">
                                    {card.sets}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-800 px-3 sm:px-4 py-3">
                                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Reps
                                </span>

                                <span className="text-[11px] sm:text-xs">
                                    {card.reps}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-800 px-3 sm:px-4 py-3">
                                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Duration
                                </span>

                                <span className="text-[11px] sm:text-xs">
                                    {card.duration} min
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-800 px-3 sm:px-4 py-3">
                                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Calories
                                </span>

                                <span className="text-[11px] sm:text-xs">
                                    {card.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex items-center justify-between px-3 sm:px-4 py-3">
                                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                    Rating
                                </span>

                                <span className="text-[11px] sm:text-xs">
                                    {card.rating}
                                </span>
                            </div>

                        </div>

                        <div className="mt-5">
                            <h2 className="text-sm font-bold uppercase">
                                Instructions
                            </h2>

                            <ol className="mt-3 space-y-2">
                                {card.instructions.map((instruction: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex gap-2 sm:gap-3 text-[11px] sm:text-xs leading-5 text-gray-400"
                                    >
                                        <span className="shrink-0 text-gray-500">
                                            {index + 1}.
                                        </span>

                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
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