'use client';

import React from 'react';
import { useRef } from 'react';
import { addScrollingClass } from '@/utils/add-scrolling-class';
import SearchIconBtn from '@/components/ui/search-icon-btn';
import SideNavButton from '@/components/ui/side-nav-button';
import ProfileMenu from '@/components/header/profile-menu';
import { useModal } from '@/components/modals/context';
import Searchbox from '@/components/ui/search-box';
import Button from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import useAuth from '@/hooks/use-auth';
import { useIsMounted } from '@/hooks/use-is-mounted';

export default function Header() {
  const mounted = useIsMounted();
  const { openModal } = useModal();
  const { isAuthorized } = useAuth();
  const headerRef = useRef(null);
  addScrollingClass(headerRef);

  return (
    <header
      ref={headerRef}
      className="dashboard-header sticky top-0 z-30 flex w-full bg-white md:flex md:items-center 2xl:h-20 4xl:h-24 is-scrolling"
    >
      <div className="container-fluid grid w-full grid-cols-2 items-center gap-0 lg:grid-cols-3">
        <div className="flex items-center gap-2 md:gap-4 2xl:gap-5">
          <SideNavButton />
          <Logo/>
        </div>
        <Searchbox className="hidden lg:block" />
        <div className="flex items-center justify-end gap-5">
          <SearchIconBtn />
          {mounted ? (
            <>
              {isAuthorized ? (
                <ProfileMenu className="hidden md:block" />
              ) : (
                <Button
                  size="sm"
                  onClick={() => openModal('SIGN_IN')}
                  className="rounded-lg !px-4 py-2 text-sm capitalize md:text-base"
                >
                  Log in
                </Button>
              )}
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}
