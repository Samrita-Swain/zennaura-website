// import React from 'react';
// import clsx from 'clsx';
// import type { Metadata } from 'next';
// import { Satisfy, Lato } from 'next/font/google';
// import '@/styles/globals.css';
// import GalleryCarouselView from '@/components/gallery/view';
// import DrawerContainer from '@/components/drawers/view';
// import ModalContainer from '@/components/modals/view';

// const lato = Lato({
//   subsets: ['latin'],
//   weight: ['300', '400', '700', '900'],
//   variable: '--font-lato',
// });

// const satisfy = Satisfy({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-satisfy',
// });

// export const metadata: Metadata = {
//   title: 'Boat Rental',
//   description: 'Find your boat with the best experience.',
//   icons: ['/images/logo.svg'],
//   viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 },
// };

// export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
//   return (
//     <html
//       lang="en"
//       className={clsx(
//         'h-full font-lato antialiased',
//         satisfy.variable,
//         lato.variable
//       )}
//     >
//       <head />
//       <body className="flex min-h-full flex-col">
//         {children}
//         <ModalContainer />
//         <DrawerContainer />
//         <GalleryCarouselView />
//       </body>
//     </html>
//   );
// }





import React from 'react';
import clsx from 'clsx';
import { Metadata } from 'next'; // Ensure your Next.js version supports this type
import { Satisfy, Lato } from 'next/font/google';
import '@/styles/globals.css';
import GalleryCarouselView from '@/components/gallery/view';
import DrawerContainer from '@/components/drawers/view';
import ModalContainer from '@/components/modals/view';

// Load Lato font
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'], // Ensure these weights exist for Lato
  variable: '--font-lato',
});

// Load Satisfy font
const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'], // Ensure this weight exists for Satisfy
  variable: '--font-satisfy',
});

// Define page metadata
export const metadata: Metadata = {
  title: 'Boat Rental',
  description: 'Find your boat with the best experience.',
  icons: { icon: '/images/logo.svg' }, // Correctly defined icon
  // viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};
export const viewport = "width=device-width, initial-scale=1";


// Props type for RootLayout
interface RootLayoutProps {
  children: React.ReactNode; // Explicitly define `children` prop as ReactNode
}

// Root layout component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full font-lato antialiased',
        satisfy.variable, // Include Satisfy font custom property
        lato.variable // Include Lato font custom property
      )}
    >
      <head>
        {/* Add any custom <meta> or <link> tags if needed */}
      </head>
      <body className="flex min-h-full flex-col">
        {children} {/* Render children passed to RootLayout */}
        <ModalContainer /> {/* Modal components */}
        <DrawerContainer /> {/* Drawer components */}
        <GalleryCarouselView /> {/* Gallery view */}
      </body>
    </html>
  );
}
