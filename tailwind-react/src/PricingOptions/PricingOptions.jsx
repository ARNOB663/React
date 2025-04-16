import React, { use } from 'react';
import PricingCard from '../components/PricingCard/PricingCard';
import DaisyPricing from '../components/DaisyPricing/DaisyPricing';
const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise)

    console.log(pricingData)
    return (
        <div>
        <h2 className='mt-5 flex text-5xl justify-center item-center'  > Get our Membership </h2>

           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* {
                pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
            } */}
            {
             pricingData.map(pricing => <DaisyPricing key={pricing.id} pricing={pricing} ></DaisyPricing>) 
            }
           </div>


               
        </div>
    );
};

export default PricingOptions;