'use client';

import Text from '@/components/ui/typography/text';
import Accordion from '@/components/ui/accordion';

const data = [
  {
    title: "What is the difference between essential oils, absolute oils, fragrance oils, and attars?",
    text: `
Essential Oils:- Pure, plant-derived oils used for therapeutic and aromatic purposes.
  Absolute Oils:-Highly concentrated oils extracted using solvents, often for delicate flowers.
  Fragrance Oils:- Synthetic or blended oils designed primarily for scent rather than therapeutic use.
  Attars:- Traditional, alcohol-free perfume oils made using natural ingredients. `,
  },
  {
    title: 'What makes your oils natural and therapeutic grade?',
    text: 'Our oils are 100% pure and sourced from high-quality natural ingredients. They are carefully extracted to retain their therapeutic properties and meet industry standards.',
  },
  {
    title: 'Can I apply your oils directly to my skin?',
    text: 'Essential and absolute oils should be diluted with a carrier oil (e.g., coconut or jojoba oil) before applying to the skin. Attars are typically ready for direct use, but a patch test is recommended.'
   },
  {
    title: 'Are your oils safe for children and pets?',
    text: ' Some oils may not be suitable for children or pets. Consult a healthcare professional or veterinarian before use. '},
  {
    title: 'How should I store your oils?',
    text: 'Store oils in a cool, dry place away from direct sunlight and heat. Keep the caps tightly sealed to prevent oxidation.'
  },
  {
    title: ' How do I perform a patch test?',
    text: 'Mix a small amount of oil with a carrier oil, apply to a small area of skin (e.g., inner forearm), and wait 24 hours to check for any reactions.',
  },
  {
    title: ' Can your oils be ingested?',
    text: ' Our oils are intended for external use only. Do not ingest them unless explicitly stated and recommended by a certified aromatherapist or healthcare provider.',
  },
  {
    title: 'What should I do if my product arrives damaged?',
    text: 'Contact our customer support team immediately with your order details and a photo of the damaged product.',
  },
  {
    title: 'Can I return or exchange a product?',
    text: 'Please refer to our Return Policy for eligibility and instructions on returns or exchanges.',
  }
];

export default function FAQTestimonial() {
  return (
    <div className="container-fluid w-full !max-w-[1248px] pt-12 lg:pt-20 2xl:pb-8 3xl:px-0 3xl:pt-24">
      <div className="text-center">
        <Text tag="h2" className="text-xl md:!text-2xl xl:!text-3xl">
          Frequently asked questions
        </Text>
        <Text className="mt-2 text-sm lg:mt-3">
          Everything you need to know about <br className="lg:hidden" /> the
          product and billing
        </Text>
      </div>
      <div className="mt-8 lg:mt-12 2xl:mt-16">
        {data.map((item) => (
          <Accordion key={item.title} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}
