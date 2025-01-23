// 'use client';

// import React from 'react';
// import VendorProfileCard from '@/components/ui/cards/vendor-profile-card';
// import ProfileListBlock from '@/components/profile/profile-list-block';

// export default function UserPage({ params }: { params: { userID: string } }) {
//   const { userID } = params;
//   return (
//     <div className="mb-12 lg:mb-16">
//       <div className="container-fluid mb-10 !px-0 sm:!px-0 md:mb-12 md:!px-6 xl:mb-16 2xl:!px-7 3xl:!px-8 4xl:!px-16">
//         <VendorProfileCard />
//       </div>
//       <div className="container-fluid">
//         <ProfileListBlock />
//       </div>
//     </div>
//   );
// }



'use client';

import React from 'react';
import VendorProfileCard from '@/components/ui/cards/vendor-profile-card';
import ProfileListBlock from '@/components/profile/profile-list-block';

interface PageProps {
  params: Promise<{ userID: string }>;  // params is now a promise
}

// Mark the page as async since we're awaiting params
export default async function UserPage({ params }: PageProps) {
  // Await the params object to get the resolved userID
  const { userID } = await params;

  return (
    <div className="mb-12 lg:mb-16">
      <div className="container-fluid mb-10 !px-0 sm:!px-0 md:mb-12 md:!px-6 xl:mb-16 2xl:!px-7 3xl:!px-8 4xl:!px-16">
        <VendorProfileCard />
      </div>
      <div className="container-fluid">
        <ProfileListBlock />
      </div>
    </div>
  );
}
