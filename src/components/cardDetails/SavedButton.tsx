'use client';
import { CardsContext } from '@/context/CardsProvider';
import { ICard } from '@/types/gym-type';
import { Bookmark } from 'lucide-react';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const SavedButton = ({ card }: { card: ICard }) => {

    const { saveLater, setSaveLater } = useContext(CardsContext) as {
        saveLater: ICard[];
        setSaveLater: (plan: ICard[])=> void;      
    }

    const handleSaveButton = () => {

        const alradyAdded = saveLater.some((item) => item.id === card.id);

        if(alradyAdded){
            toast.error(`Already saved`);
            return;
        }

        setSaveLater([...saveLater, card]);
        toast.success(`Added to save for later`);
    }

    return (
        <div>
            <button
                onClick={()=> handleSaveButton()}
                className="flex items-center gap-1.5 sm:gap-2 rounded-lg border border-gray-700 px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs text-gray-300 transition hover:bg-gray-800 whitespace-nowrap">
                <Bookmark size={14} className="sm:w-[15px] sm:h-[15px]" />
                Save for later
            </button>
        </div>
    );
};

export default SavedButton;