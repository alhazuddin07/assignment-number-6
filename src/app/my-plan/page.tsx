import SummaryCard from '@/components/my-plan-2/SummaryCard';
import TabsCard from '@/components/my-plan-2/TabsCard'
import React from 'react';

const MyPlanPage = () => {
    return (
        <div className='container mx-auto mt-6 sm:mt-7 md:mt-8 lg:mt-9 px-4 sm:px-5 md:px-6 lg:px-0'>
            <div className='px-0 sm:px-0 md:px-2 lg:px-0'>
                <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl pb-2 text-white'>
                    MY PLAN
                </h2>

                <p className='text-[#8A92A0] text-sm sm:text-base md:text-base lg:text-base'>
                    Cap of five lifts for today. Finish item, then load more.
                </p>
            </div>

            <SummaryCard />

            <TabsCard />

        </div>
    );
};

export default MyPlanPage;