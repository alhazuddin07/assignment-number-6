'use client';
import { CardsContext } from '@/context/CardsProvider';
import { ICard } from '@/types/gym-type';
import { Bookmark } from 'lucide-react';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const SavedButton = ({ card }: { card: ICard }) => {

    const { saveLater, setSaveLater } = useContext(CardsContext);

    const handleSaveButton = () => {

        setSaveLater([...saveLater, card]);
        toast.success(`You have added "${card.name}" to save for later `);
    }

    return (
        <div>
            <button
                onClick={()=> handleSaveButton()}
                className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2.5 text-xs text-gray-300 transition hover:bg-gray-800">
                <Bookmark size={15} />
                Save for later
            </button>
        </div>
    );
};

export default SavedButton;