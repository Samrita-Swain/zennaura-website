'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { Routes } from '@/config/routes';

// const menuItems = [
//   {
//     label: 'Home',
//     path: Routes.public.home,
//   },
//   {
//     label: 'About',
//     path: Routes.public.pricing,
//   },
//   {
//     label: 'Products',
//     path: Routes.public.explore,
//   },
//   {
//     label: 'Blog',
//     path: Routes.public.help,
//   },
// ];

const termsandcondition = [
  {
    label: 'Terms of use',
    path: Routes.public.termsofuse,
  },
  {
    label: 'FAQ',
    path: Routes.public.faq,
  },
  {
    label: 'Payments',
    path: Routes.public.Payments,
  },
  // {
  //   label: 'Copyright',
  //   path: Routes.public.Comment,
  // },
  {
    label: 'Privacy',
    path: Routes.public.Policy,
  }
];

const usefullinks = [
  {
    label: 'Essential Oil',
    // path: Routes.public.AboutUs,
  },
  {
    label: 'Fragrance Oil',
    path: Routes.public.faq,
  },
  {
    label: 'Absolute Oil',
    path: Routes.public.Payments,
  },
  {
    label: 'Attars',
    // path: Routes.public.Comment,
  },
  {
    label: 'Carrier Oil',
    // path: Routes.public.Comment,
  }
];

// Update the type for `CustomerServices` to make `path` optional
const CustomerServices = [
  {
    label: 'Phone : +971-565937032',
    path: '', // Optional path
  },
  {
    label: 'Landline: (04) 202 1358',
    path: '', // Optional path
  },
  {
    label: 'Email: kewin.david@zennaura.com',
    path: '', // Optional path
  }
  // {
  //   label: 'support@voyarent.com',
  // },
  // {
  //   label: 'account@voyarent.com',
  // }
];

export default function Footer({ className }: { className?: string }) {
  return (
    <footer>
      <div className="relative mt-16 bg-deep-purple-100">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className=" px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-white-950">
          <div className=" grid gap-16 row-gap-10 mb-8 lg:grid-cols-6 bg-white-950">
            <div className=" md:max-w-md lg:col-span-2 bg-white-950">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                {/* <LOGO></LOGO> */}
                <span className="ml-2 text-xl font-bold tracking-wide text-black-100 uppercase">
                  Zennaura
                </span>
              </a>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-black-100">
                  “Essential Elegance: Capturing Nature’s Symphony in Every Aroma – Discover the Art of Wellness with Zennaura"
                </p>
                {/* <p className="mt-4 text-sm text-black-100">
                  Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p> */}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-semibold text-black-100 tracking-wide ">
                  Useful Links
                </p>
                <ul className="mt-2 space-y-2">
                  {usefullinks.map((item) => (
                    <li key={item.label} className="">
                      <a href={item.path} className=" text-black-100 ">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-black-100 tracking-wide ">
                  Terms and Conditions
                </p>
                <ul className="mt-2 space-y-2">
                  {termsandcondition.map((item) => (
                    <li key={item.label} className="">
                      <a href={item.path} className=" text-black-100 ">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-black-100 tracking-wide ">
                  Customer Services
                </p>
                <ul className="mt-2 space-y-2">
                  {CustomerServices.map((item) => (
                    <li key={item.label} className="">
                      <a href={item.path} className=" text-black-100 ">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-black-100 tracking-wide ">
                  Location
                </p>
                <p>Office number F6103, Entrance C, First Floor , Entrance C , Yiwu Market ( Dubai traders market) , Mina Jebel Ali - Dubai, UAE</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-sm text-black-100">
              © Copyright 2024 Wipster Technology All rights reserved.
            </p>
            {/* <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.9,0,0,0.9,0,2v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V2C24,0.9,23.1,0,22,0z M12,16.5 c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S13.7,16.5,12,16.5z M12,6c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S14.2,6,12,6z" />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
