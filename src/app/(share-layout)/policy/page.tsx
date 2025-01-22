import Policy from "@/components/policy/policy";
import SubscriptionBlock from "@/components/subscription/subscription-block";



export default function page() {
    return (
      <div>
        <Policy />
        <SubscriptionBlock sectionClassName="4xl:!px-16" />
      </div>
    );
  }