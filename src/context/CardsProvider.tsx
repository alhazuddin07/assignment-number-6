'use client';
import { createContext, ReactNode, useState } from 'react';



export const CardsContext = createContext({});


const CardsProvider = ({ children }: { children: ReactNode }) => {

    const [todaysPlan, setTodaysPlan] = useState([]);
    const [saveLater, setSaveLater] = useState([]);

    const shareData = {
        todaysPlan, 
        setTodaysPlan,
        saveLater,
        setSaveLater,
    }


    return (
        <CardsContext.Provider value={shareData}>{children}</CardsContext.Provider>
    );
};

export default CardsProvider;