import Payments from "@/components/payments/payments";
import SubscriptionBlock from "@/components/subscription/subscription-block";



export default function page() {
    return (
      <div>
        <Payments />
        <SubscriptionBlock sectionClassName="4xl:!px-16" />
      </div>
    );
  }