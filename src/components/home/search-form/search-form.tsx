'use client';

import { useState } from 'react';
import { format, addDays } from 'date-fns';
import { useRouter } from 'next/navigation';
import { makeQueryString } from '@/utils/makeQueryString';
import DatePickerInput from '@/components/home/search-form/daterange-picker';
import LocationInput from '@/components/home/search-form/location-input';
import SearchAutocomplete from '@/components/ui/search-autocomplete';
import { MapMarkerIcon } from '@/components/icons/map-marker';
import { CalenderIcon } from '@/components/icons/calender';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';
import { Routes } from '@/config/routes';

type QueryStringType = {
  location?: string;
  departureDate: string;
  returnDate: string;
};

export default function FindTripForm() {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchBox, setSearchBox] = useState<any>();
  const [locationInput, setLocationInput] = useState({
    searchedLocation: '',
    searchedPlaceAPIData: [],
  });

  const onLoad = (ref: any) => setSearchBox(ref);
  const onPlacesChanged = () => {
    const places = searchBox?.getPlaces();
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : [],
    });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    let queryString = '';
    const queryObj: QueryStringType = {
      location: locationInput.searchedLocation,
      departureDate: format(startDate, 'yyyy-MM-dd'),
      returnDate: format(endDate, 'yyyy-MM-dd'),
    };
    queryString = makeQueryString(queryObj);
    router.push(`${Routes.public.explore}?${queryString}`);
  };

  return (
    <form
      noValidate
      onSubmit={handleFormSubmit}
      className="relative z-[2] w-full max-w-[530px] rounded-lg bg-white p-6 shadow-2xl sm:m-0 sm:max-w-[560px] sm:p-7 sm:pt-9 md:max-w-[510px] md:shadow-none lg:rounded-xl xl:max-w-[540px] xl:p-9 4xl:max-w-[596px] 4xl:p-12"
    >
      <div className="mb-3 sm:mb-0">
        {/* <span className="mb-2 hidden font-satisfy text-xl leading-7 text-gray-dark sm:block 4xl:text-[28px] 4xl:leading-[44px]">
          Enjoy your trip
        </span> */}
        <Text
          tag="h1"
          className="leading-12 mb-2 !text-xl !font-black uppercase text-gray-dark sm:!text-[28px] sm:!leading-9  4xl:!text-4xl 4xl:!leading-[52px]"
        >
          Zennaura
        </Text>
        <Text className="mb-5 hidden leading-6 !text-secondary sm:block 3xl:leading-8 4xl:mb-6 4xl:text-lg">
        “Essential Elegance: Capturing Nature’s Symphony in Every Aroma – Discover the Art of Wellness with Zennaura&quot;
        </Text>
      </div>
      {/* <SearchAutocomplete
        onLoad={onLoad}
        onPlacesChanged={onPlacesChanged}
        loader={
          <LocationInput
            label="Loading . . ."
            icon={<MapMarkerIcon className="h-6 w-6 text-gray" />}
            className="mb-3"
            disabled
          />
        }
      >
        <LocationInput
          label="Location"
          icon={<MapMarkerIcon className="h-6 w-6 text-gray" />}
          className="mb-3"
          value={locationInput.searchedLocation || ''}
          onChange={(event) =>
            setLocationInput({
              ...locationInput,
              searchedLocation: event.target.value,
            })
          }
        />
      </SearchAutocomplete>
      <DatePickerInput
        label="Departure"
        selected={startDate}
        dateFormat="eee dd / LL / yy"
        icon={<CalenderIcon className="h-6 w-6 text-gray" />}
        onChange={(date: Date) => {
          setStartDate(date);
          setEndDate(addDays(date, 1));
        }}
        minDate={new Date()}
        containerClass="mb-3"
        popperClassName="homepage-datepicker"
      />
      <DatePickerInput
        label="Return"
        selected={endDate}
        dateFormat="eee dd / LL / yy"
        icon={<CalenderIcon className="h-6 w-6 text-gray" />}
        onChange={(date: Date) => setEndDate(date)}
        minDate={endDate}
        containerClass="mb-3"
        popperClassName="homepage-datepicker"
      /> */}

        <div className='grid grid-cols-2'>
        <div>
        <Text
          tag="h3"
          className="leading-12 mb-2 !text-xl text-gray-dark sm:!text-[20px] sm:!leading-9  4xl:!text-4xl 4xl:!leading-[52px]"
        >
          Essence of Elegance
        </Text>
      
        <Button
        type="submit"
        className="lg:text-[15px] lg:p-3 sm:text-[17px] sm:p-3 xs:text-[17px] xs:p-3"
        rounded="lg"
        size="sm"
      >
        Shop Now
      </Button>
        </div>

        <div>
        <Text
          tag="h3"
          className="leading-12 mb-2 !text-xl  text-gray-dark sm:!text-[20px] sm:!leading-9  4xl:!text-4xl 4xl:!leading-[52px]"
        >
          Scented Serenity Always
        </Text>


        <Button
        type="submit"
        className="lg:text-[15px] lg:p-3 sm:text-[17px] sm:p-3 xs:text-[17px] xs:p-3"
        rounded="lg"
        size="sm"
      >
        Shop Now
      </Button>
        </div>
        </div>


    </form>
  );
}
