'use client';
import { CardsContext } from '@/context/CardsProvider';
import { ICard } from '@/types/gym-type';
import { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock3, Flame, Star, X } from 'lucide-react';
import { toast } from 'react-toastify';

const MyPlanPart2 = () => {

    const {
        todaysPlan,
        saveLater,
        setTodaysPlan,
        setSaveLater
    } = useContext(CardsContext) as {
        todaysPlan: ICard[];
        saveLater: ICard[];
        setTodaysPlan: (cards: ICard[]) => void;
        setSaveLater: (cards: ICard[]) => void;
    };


    // Active tab
    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

    const [sortBy, setSortBy] = useState<'duration' | 'rating' | 'caloriesBurned'>('duration');

    const cards: ICard[] = activeTab === 'today' ? todaysPlan : saveLater;

    // Sorting function
    const sortCards = (cards: ICard[]) => {

        const sortedCards = [...cards];

        if (sortBy === 'duration') {
            sortedCards.sort((a, b) => b.duration - a.duration );
        } else if (sortBy === 'rating') {
            sortedCards.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'caloriesBurned') {
            sortedCards.sort((a, b) => b.caloriesBurned - a.caloriesBurned );
        }

        return sortedCards;
    };

    const sortedCards = sortCards(cards);


    // Remove card
    const handleRemove = (id: number) => {

        if (activeTab === 'today') {
            const updatedCards = todaysPlan.filter((card: ICard) => card.id !== id);
            setTodaysPlan(updatedCards);
            toast.warning("Exercise removed from today's plan")

        } else {
            const updatedCards = saveLater.filter((card: ICard) => card.id !== id);
            setSaveLater(updatedCards);
            toast.warning("Exercise removed from saved list")
        }
    };

    return (
        <div className="mt-15 sm:px-4 lg:px-0">

            <div className="flex items-center justify-between">

                <div className="tabs tabs-box bg-[#34373f]">

                    <button
                        onClick={() => setActiveTab('today')}
                        className={`tab ${
                            activeTab === 'today'
                                ? 'tab-active'
                                : ''
                        }`}
                    >
                        Today&apos;s Plan
                    </button>


                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`tab ${
                            activeTab === 'saved'
                                ? 'tab-active'
                                : ''
                        }`}
                    >
                        Saved
                    </button>

                </div>

                {/* Sort */}
                <div className="flex items-center gap-3">

                    <span className="text-sm text-gray-400">
                        Sort By
                    </span>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as 'duration' | 'rating' | 'caloriesBurned')}
                        className="rounded-md border border-gray-400 px-3 py-2"
                    >
                        <option value="duration">Duration</option>
                        <option value="rating">Rating</option>
                        <option value="caloriesBurned">Calories</option>

                    </select>
                </div>

            </div>


            {/* Cards */}
            <div className="my-10 space-y-3">

                {sortedCards.length === 0 ? (
                    <div className="rounded-xl border border-gray-800 bg-[#15171c] p-25 text-center text-gray-400">

                        {activeTab === 'today'
                            ? <div className='space-y-4'>
                                <h2 className='text-2xl text-white'>NOTHING HERE YET</h2>
                                <p className=''>Browse the library and add a lift to get today moving.</p>
                                <Link href="/">
                                    <button className='btn bg-[#ccff00] text-black rounded-2xl'>Go to workouts</button>
                                </Link>
                            </div>

                            : <div className='space-y-4'>
                                <h2 className='text-2xl text-white'>NOTHING HERE YET</h2>
                                <p className=''>Browse the library and add a lift to get today moving.</p>
                                <Link href="/">
                                    <button className='btn bg-[#ccff00] text-black rounded-2xl'>Go to workouts</button>
                                </Link>
                            </div>
                        }
                    </div>

                ) : (

                    sortedCards.map((card: ICard) => (

                        <div
                            key={card.id}
                            className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#15171c] p-3"
                        >

                            {/* Left Side */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-16 w-28 overflow-hidden rounded-lg">
                                    <Image
                                        src={card.image}
                                        alt={card.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div>

                                    <h3 className="font-bold uppercase">{card.name}</h3>
                                    <p className="text-sm text-gray-500">{card.equipment}</p>
                                    <div className="mt-1 flex gap-4 text-xs text-gray-400">

                                        <span className="flex items-center gap-1">
                                            <Clock3 size={13} />
                                            {card.duration} min
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <Flame size={13} />
                                            {card.caloriesBurned} kcal
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <Star size={13} />
                                            {card.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="flex items-center gap-3">

                                <Link
                                    href={`/libraryWorkoutCard/${card.id}`}
                                    className="rounded-full border border-gray-700 px-4 py-2 text-xs"
                                >
                                    View Details
                                </Link>

                                {activeTab === 'today' && (

                                    <button
                                        className="rounded-full bg-[#C2F10D] px-5 py-2 text-xs font-bold text-black">
                                        ✓ Mark as Done
                                    </button>
                                )}

                                <button
                                    onClick={() => handleRemove(card.id)}
                                    className="p-2 text-gray-500 hover:text-white">
                                    <X size={16} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyPlanPart2;