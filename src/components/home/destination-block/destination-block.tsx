'use client';

import React from 'react';
import { destinations } from 'public/data/destinations';
import { useTimeout } from '@/hooks/use-timeout';
import DestinationCarousel from '@/components/home/destination-block/destination-carousel';
import BlockLoader from '@/components/ui/loader/block-loader';
import Section from '@/components/ui/section';

export default function DestinationBlock() {
  const { state } = useTimeout();

  return (
    <Section
      title="Featured Category"
      className="lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16"
      headerClassName="mb-4 md:mb-5 xl:mb-6"
    >
      {!state && <BlockLoader />}
      {state && <DestinationCarousel data={destinations} />}
    </Section>
  );
}
