import React, { Suspense } from "react";
import SubscriptionBlock from "@/components/subscription/subscription-block";
import FAQTestimonial from "@/components/faq/faq-testimonial";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>Loading FAQ...</div>}>
        <FAQTestimonial />
      </Suspense>
      <Suspense fallback={<div>Loading Subscription...</div>}>
        <SubscriptionBlock sectionClassName="4xl:!px-16" />
      </Suspense>
    </div>
  );
}
