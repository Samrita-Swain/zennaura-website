'use client';

import clsx from 'clsx';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';

export default function AboutHero({
  state,
  onClick,
}: {
  state: string;
  onClick: (key: string) => void;
}) {
  return (
    <div className="mt-8 text-center   lg:mt-20 2xl:mt-24">
      <Text tag="h1" className="text-[28px] font-bold leading-10">
      Welcome to Zennaura
      </Text>
      <Text tag="p" className="mt-5 text-base 2xl:mt-4 text-[16px]">
      Zennaura company based in Dubai, where nature’s essence meets well-being. Our journey began with a simple belief that the best solutions for health and well-being comes from the earth.<br/><br/>Our company sources raw materials from sustainable and ethical suppliers, ensuring a positive impact on both the environment and local communities. We work closely with farmers , manufacturer and distillers from around the world to ensure that our products are extracted from the finest plants and flowers without any harmful chemical and additives. <br/><br/>We provide wide range of products such as essential oils, natural absolutes, fragrance oils , carrier oils, CO2 extracts, floral water, Indian & Arabic attar, Agarwood chips/oils etc. Our oils are extracted in 15 + countries across the globe for example vanilla is from Uganda , Tea Tree is from Australia , Lavender is from Bulgaria and India, Clove oil is from Indonesia and so on. <br/><br/>hrough rigorous testing and quality control, we guarantee that every bottle reflects the pure essence of the plants it originated from. All our essential oils have been tested for purity using gas chromatography and other tests.
      </Text>
      {/* <div className="mt-8 inline-block rounded-md bg-[#F2F4F7] p-1 2xl:mt-14">
        <Button
          size="lg"
          className={clsx(
            'focus:!ring-0 2xl:!p-[11px_26px]',
            state === 'monthly'
              ? 'bg-gray-dark text-white'
              : '!bg-transparent !text-gray-dark'
          )}
          onClick={() => onClick('monthly')}
        >
          Monthly Plan
        </Button>
        <Button
          size="lg"
          className={clsx(
            'focus:!ring-0 2xl:!p-[11px_26px]',
            state === 'annually'
              ? 'bg-gray-dark text-white'
              : '!bg-transparent !text-gray-dark'
          )}
          onClick={() => onClick('annually')}
        >
          Annually Plan
        </Button>
      </div> */}
    </div>
  );
}
