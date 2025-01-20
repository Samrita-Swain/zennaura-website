import React from 'react';
import PricingBlock from '@/components/pricing/pricing-block';
// import PricingSteps from '@/components/pricing/pricing-steps';
// import ProductInformation from '@/components/pricing/pricing-testimonials';
import SubscriptionBlock from '@/components/subscription/subscription-block';

export default function page() {
  return (
    <div>
      <PricingBlock />
      {/* <PricingSteps /> */}
      {/* <ProductInformation /> */}
      <SubscriptionBlock sectionClassName="4xl:!px-16" />
    </div>
  );
}
