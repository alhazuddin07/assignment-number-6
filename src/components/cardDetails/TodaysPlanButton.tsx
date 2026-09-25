'use client';
import { CardsContext } from '@/context/CardsProvider';
import { ICard } from '@/types/gym-type';
import { CalendarPlus } from 'lucide-react';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const TodaysPlanButton = ({ card }: {card: ICard}) => {

    const { todaysPlan, setTodaysPlan } = useContext(CardsContext);

    const handleAddTodaysPlan = () => {

        setTodaysPlan([...todaysPlan, card]);
        toast.success(`You have added "${card.name}" to your today's plan`);
    }

    return (
        <div>
            <button
                onClick={()=> handleAddTodaysPlan()}
                className="flex items-center gap-2 rounded-lg bg-[#b6ff00] px-4 py-2.5 text-xs font-bold text-black transition hover:bg-[#a5e600]">
                <CalendarPlus size={15} />
                Add to today&apos;s plan
            </button>
        </div>
    );
};

export default TodaysPlanButton;