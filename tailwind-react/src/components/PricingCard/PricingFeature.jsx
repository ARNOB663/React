import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeature = ({features}) => {
    return (
        <div className='mt-5'>
            <p className='flex mt-3' > <CircleCheckBig></CircleCheckBig> {features} </p>
        </div>
    );
};

export default PricingFeature;