// import React from 'react';
// import TransparentHeader from '@/components/header/transparent';
// import MobileNav from '@/components/ui/mobile-nav';
// import Footer from '@/components/footer/footer';

// export default function HomeLayout({ children }: React.PropsWithChildren<{}>) {
//   return (
//     <>
//       <TransparentHeader />
//       <main className="flex-grow">{children}</main>
//       <Footer />
//       <MobileNav />
//     </>
//   );
// }












'use client';

import React from 'react';
import TransparentHeader from '@/components/header/transparent';
import MobileNav from '@/components/ui/mobile-nav';
import Footer from '@/components/footer/footer';

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <TransparentHeader />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileNav />
    </div>
  );
}
