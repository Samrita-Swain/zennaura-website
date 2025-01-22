// 'use client';

// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { useQueryParam } from '@/hooks/use-query-param';
// // import { JetskiBoatIcon } from '@/components/icons/boat-types/jetski-boat';
// // import { MotorBoatIcon } from '@/components/icons/boat-types/motor-boat';
// // import { HouseBoatIcon } from '@/components/icons/boat-types/house-boat';
// // import { RibBoatIcon } from '@/components/icons/boat-types/rib-boat';
// // import { SailBoatIcon } from '@/components/icons/sail-boat';
// import SelectBox from '@/components/ui/select-box';

// const options = [
//   {
//     label: 'Choose product type',
//     // icon: <SailBoatIcon className="h-auto w-5" />,
//     disabled: true,
//   },
//   {
//     label: 'Essential Oils',
//     // icon: <HouseBoatIcon className="h-auto w-5" />,
//   },
//   {
//     label: 'Fragrance Oils',
//     // icon: <MotorBoatIcon className="h-auto w-5" />,
//   },
//   {
//     label: 'Absolute Oils',
//     // icon: <JetskiBoatIcon className="h-auto w-5" />,
//   },
//   {
//     label: 'Agarwood Chips',
//     // icon: <RibBoatIcon className="h-auto w-5" />,
//   },
//   {
//     label: 'Carrier Oils',
//     // icon: <HouseBoatIcon className="h-auto w-5" />,
//   },
//   {
//     label: 'Sandal Based Attars',
//   },
//   {
//     label: 'Natural Indian Attars',
//   },
// ];

// export default function productTypesFilter() {
//   const searchParams = useSearchParams();
//   const productTypes = searchParams?.get('productTypes');
//   const { clearFilter, updateQueryparams } = useQueryParam();
//   const [selected, setSelected] = useState(options[0]);

//   // sets the url when selected
//   useEffect(() => {
//     if (selected.disabled) {
//       clearFilter(['productTypes']);
//     } else {
//       updateQueryparams('productTypes', selected.label);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selected]);

//   // sets the state if in url
//   useEffect(() => {
//     if (productTypes) {
//       const b: any = options.find((item) => item.label === productTypes);
//       setSelected(b);
//     } else {
//       setSelected(options[0]);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [productTypes]);

//   return (
//     <SelectBox
//       value={selected}
//       label="Select Boat Type"
//       options={options}
//       optionIcon={true}
//       onChange={(data: any) => setSelected(data)}
//       labelClassName="mb-2 !text-sm lg:!text-base"
//       buttonClassName="h-10 lg:h-11 2xl:h-12"
//       arrowIconClassName="right-3"
//       clearable={selected.disabled ? false : true}
//       onClearClick={(e) => {
//         e.stopPropagation();
//         setSelected(options[0]);
//       }}
//     />
//   );
// }








// 'use client';

// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { useQueryParam } from '@/hooks/use-query-param';
// import { JetskiBoatIcon } from '@/components/icons/boat-types/jetski-boat';
// import { MotorBoatIcon } from '@/components/icons/boat-types/motor-boat';
// import { HouseBoatIcon } from '@/components/icons/boat-types/house-boat';
// import { RibBoatIcon } from '@/components/icons/boat-types/rib-boat';
// import { SailBoatIcon } from '@/components/icons/sail-boat';
// import SelectBox from '@/components/ui/select-box';

// const options = [
//   { label: 'Choose product type', disabled: true },
//   { label: 'Essential Oils' },
//   { label: 'Fragrance Oils' },
//   { label: 'Absolute Oils' },
//   { label: 'Agarwood Chips' },
//   { label: 'Carrier Oils' },
//   { label: 'Sandal Based Attars' },
//   { label: 'Natural Indian Attars' },
// ];

// export default function ProductTypesFilter() { // Renamed to PascalCase
//   const searchParams = useSearchParams();
//   const productTypes = searchParams?.get('productTypes');
//   const { clearFilter, updateQueryparams } = useQueryParam();
//   const [selected, setSelected] = useState(options[0]);

//   // Updates the URL based on the selected product type
//   useEffect(() => {
//     if (selected.disabled) {
//       clearFilter(['productTypes']);
//     } else {
//       updateQueryparams('productTypes', selected.label);
//     }
//   }, [selected, clearFilter, updateQueryparams]);

//   // Sets the selected state based on the URL query params
//   useEffect(() => {
//     if (productTypes) {
//       const selectedOption = options.find((item) => item.label === productTypes);
//       setSelected(selectedOption || options[0]);
//     } else {
//       setSelected(options[0]);
//     }
//   }, [productTypes]);

//   return (
//     <SelectBox
//       value={selected}
//       label="Select Product Type"
//       options={options}
//       optionIcon={true}
//       onChange={(data) => setSelected(data)}
//       labelClassName="mb-2 !text-sm lg:!text-base"
//       buttonClassName="h-10 lg:h-11 2xl:h-12"
//       arrowIconClassName="right-3"
//       clearable={!selected.disabled}
//       onClearClick={(e) => {
//         e.stopPropagation();
//         setSelected(options[0]);
//       }}
//     />
//   );

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQueryParam } from '@/hooks/use-query-param';
import SelectBox from '@/components/ui/select-box';

type OptionType = {
  label: string;
  disabled?: boolean;
};

const options: OptionType[] = [
  { label: 'Choose product type', disabled: true },
  { label: 'Essential Oils' },
  { label: 'Fragrance Oils' },
  { label: 'Absolute Oils' },
  { label: 'Agarwood Chips' },
  { label: 'Carrier Oils' },
  { label: 'Sandal Based Attars' },
  { label: 'Natural Indian Attars' },
];

export default function ProductTypesFilter() {
  const searchParams = useSearchParams();
  const productTypes = searchParams?.get('productTypes');
  const { clearFilter, updateQueryparams } = useQueryParam();
  const [selected, setSelected] = useState<OptionType>(options[0]);

  // Updates the URL based on the selected product type
  useEffect(() => {
    if (selected.disabled) {
      clearFilter(['productTypes']);
    } else {
      updateQueryparams('productTypes', selected.label);
    }
  }, [selected, clearFilter, updateQueryparams]);

  // Sets the selected state based on the URL query params
  useEffect(() => {
    if (productTypes) {
      const selectedOption = options.find((item) => item.label === productTypes);
      setSelected(selectedOption || options[0]);
    } else {
      setSelected(options[0]);
    }
  }, [productTypes]);

  return (
    <SelectBox
  value={selected}
  label="Select Product Type"
  options={options}
  optionIcon={true}
  onChange={(data) => setSelected(data as OptionType)} // Type assertion
  labelClassName="mb-2 !text-sm lg:!text-base"
  buttonClassName="h-10 lg:h-11 2xl:h-12"
  arrowIconClassName="right-3"
  clearable={!selected.disabled}
  onClearClick={(e) => {
    e.stopPropagation();
    setSelected(options[0]);
  }}
/>

  );
}
