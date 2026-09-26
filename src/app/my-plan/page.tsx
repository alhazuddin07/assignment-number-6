
import SummaryCard from '@/components/my-plan-2/SummaryCard';
import TabsCard from '@/components/my-plan-2/TabsCard'
import React from 'react';

const MyPlanPage = () => {
    return (
        <div className='container mx-auto'>
            <div className='sm:px-4 lg:px-0'>
                <h2 className='font-bold text-4xl pb-2'>MY PLAN</h2>
                <p className='text-[#8A92A0]'>
                    Cap of five lifts for today. Finish item, then load more.
                </p>
            </div>

            <SummaryCard />

            <TabsCard />

        </div>
    );
};

export default MyPlanPage;