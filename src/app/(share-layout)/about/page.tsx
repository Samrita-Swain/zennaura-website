import React from 'react';
import AboutBlock from '@/components/about/about-block';
// import PricingSteps from '@/components/pricing/pricing-steps';
// import ProductInformation from '@/components/pricing/pricing-testimonials';
import SubscriptionBlock from '@/components/subscription/subscription-block';

export default function page() {
  return (
    <div>
      <AboutBlock />
      {/* <PricingSteps /> */}
      {/* <ProductInformation /> */}
      <SubscriptionBlock sectionClassName="4xl:!px-16" />
    </div>
  );
}
