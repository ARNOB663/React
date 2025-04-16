import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name,price,description,features} = pricing;
    
    return (
        <div className='flex flex-col border bg-amber-800 rounded-2xl p-4 '>
        
          {/* card header */}
          <div>
         <h1 className='text-7xl'>{name}</h1>
         <h4 className='text-3xl'>{price}</h4>
          </div>
          {/* card body */}
            <div className='p-4 bg-amber-900 rounded-2x1 mt-9 flex-1'>
            <p>{description}</p>
            {
                features.map((features,index) => <PricingFeature key={index} features={features}></PricingFeature> )
            }
            </div>
            <button className="btn w-full mt-4">Subscribe</button>

        </div>
    );
};

export default PricingCard;