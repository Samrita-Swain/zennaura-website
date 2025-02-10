// import React, { Suspense } from "react";
// import SubscriptionBlock from "@/components/subscription/subscription-block";
// import FAQTestimonial from "@/components/faq/faq-testimonial";

// export default function Page() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading FAQ...</div>}>
//         <FAQTestimonial />
//       </Suspense>
//       <Suspense fallback={<div>Loading Subscription...</div>}>
//         <SubscriptionBlock sectionClassName="4xl:!px-16" />
//       </Suspense>
//     </div>
//   );
// }





'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the components with SSR disabled
const FAQTestimonial = dynamic(() => import('@/components/faq/faq-testimonial'), { ssr: false });
const SubscriptionBlock = dynamic(() => import('@/components/subscription/subscription-block'), { ssr: false });

export default function Page() {
  return (
    <div>
      {/* Suspense for dynamic loading */}
      <Suspense fallback={<div>Loading FAQ...</div>}>
        <FAQTestimonial />
      </Suspense>

      <Suspense fallback={<div>Loading Subscription...</div>}>
        <SubscriptionBlock sectionClassName="4xl:!px-16" />
      </Suspense>
    </div>
  );
}
