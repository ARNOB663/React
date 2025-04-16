import React, { use } from 'react';
import PricingCard from '../components/PricingCard/PricingCard';
const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise)

    console.log(pricingData)
    return (
        <div>
        <h2 className='text-5xl mt-6 flex justify-center'  > Get our Membership </h2>
        
           <div className='grid md:grid-cols-3 gap-6'>
            {
                pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
            }
           </div>
               
        </div>
    );
};

export default PricingOptions;