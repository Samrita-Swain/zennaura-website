// 'use client';

// import Text from '@/components/ui/typography/text';
// import Accordion from '@/components/ui/accordion';

// const accordionData = [
//   {
//     title: 'Usage:',
//     text: 'Aguacate Gel perfume oil with its fresh and green aroma of ripe avocados. Its unique and refreshing scent evokes feelings of vitality and energy while soothing and calming the ambiance.',
//   },
//   {
//     title: 'Top Benefits:',
//     text: 'Aromatherapy: The fresh and light aroma helps to uplift mood and reduce stress, creating a calming atmosphere.Skincare Creations: Adds a luxurious fragrance to body creams, lotions, and soaps.Home Fragrance: Perfect for use in diffusers, wax melts, and candles to freshen up indoor spaces.',
//   },
//   {
//     title: 'How to Use:',
//     text: 'Add a few drops to your diffuser to fill the air with a rejuvenating scent.Mix with unscented bases such as lotions, body butters, or shower gels to create personalized products.Incorporate into candle wax or soap bases for handmade creations.',
//   },
//   {
//     title: 'Recipes:',
//     text: 'Refreshing Room Spray: Combine Aguacate Gel Fragrance Oil with water and a splash of alcohol in a spray bottle for an instant mood booster.Invigorating Body Scrub: Blend Aguacate Gel Fragrance Oil with sugar, coconut oil, and a touch of aloe vera gel for a revitalizing exfoliant.Soothing Candle Blend: Mix Aguacate Gel Fragrance Oil with a hint of vanilla and green tea fragrance oils for a soft, harmonious scent.',
//   },
//   {
//     title: 'Perfumery:',
//     text: 'Aguacate Gel Fragrance Oil adds a refreshing and unique twist to perfumes. Its delicate, creamy-green notes work well as a middle or base layer, blending beautifully with citrus, floral, or earthy aromas to create balanced and intriguing fragrances.',
//   },
//   {
//     title: 'Interesting Facts:',
//     text: 'The name "Aguacate" is derived from the Spanish word for avocado, reflecting its creamy, fruity essence.Aguacate Gel Fragrance Oil is synthetic and designed to mimic the fresh and delicate scent of natural avocados.Its clean and invigorating scent is suitable for all seasons, offering versatility in product formulations.',
//   },
// ];

// export default function ProductInformation() {
//   return (
//     <div className="container-fluid w-full !max-w-[1248px] pt-12 lg:pt-20 2xl:pb-8 3xl:px-0 3xl:pt-24">
//       <div className="text-center">
//         {/* <Text tag="h2" className="text-xl md:!text-2xl xl:!text-3xl">
//           Frequently asked questions
//         </Text> */}
//         <Text tag="h2" className="text-xl md:!text-2xl xl:!text-3xl">
//           Descriptions
//         </Text>
//         {/* <Text className="mt-2 text-sm lg:mt-3">
//           Everything you need to know about <br className="lg:hidden" /> the
//           product and billing
//         </Text> */}
//       </div>
//       <div>
//       {/* <div className="mt-8 lg:mt-12 2xl:mt-16"> */}
//         {accordionData.map((item) => (
//           <Accordion key={item.title} title={item.title} text={item.text} />
//         ))}
//       </div>
//     </div>
//   );
// }





// 'use client';

// import Text from '@/components/ui/typography/text';
// import Accordion from '@/components/ui/accordion';
// import accordionData from '/public/data/accordionData.js'; // Import data

// // Define the type for the accordion data
// interface AccordionItem {
//   title: string;
//   text: string;
// }

// export default function ProductInformation() {
//   return (
//     <div className="container-fluid w-full !max-w-[1248px] pt-12 lg:pt-20 2xl:pb-8 3xl:px-0 3xl:pt-24">
//       <div className="text-center">
//         <Text tag="h2" className="text-xl md:!text-2xl xl:!text-3xl">
//           Descriptions
//         </Text>
//       </div>
//       <div>
//         {accordionData.map((item: AccordionItem) => (
//           <Accordion key={item.title} title={item.title} text={item.text} />
//         ))}
//       </div>
//     </div>
//   );
// }




'use client';

import { useEffect, useState } from 'react';
import Text from '@/components/ui/typography/text';
import Accordion from '@/components/ui/accordion';

interface AccordionItem {
  title: string;
  text: string;
}

export default function ProductInformation() {
  const [accordionData, setAccordionData] = useState<AccordionItem[]>([]);

  useEffect(() => {
    // Fetch the data from the public folder
    fetch('/data/accordionData.js')
      .then((response) => response.json())
      .then((data) => setAccordionData(data))
      .catch((error) => console.error('Error loading accordion data:', error));
  }, []);

  return (
    <div className="container-fluid w-full !max-w-[1248px] pt-12 lg:pt-20 2xl:pb-8 3xl:px-0 3xl:pt-24">
      <div className="text-center">
        <Text tag="h2" className="text-xl md:!text-2xl xl:!text-3xl">
          Descriptions
        </Text>
      </div>
      <div>
        {accordionData.map((item: AccordionItem) => (
          <Accordion key={item.title} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}
