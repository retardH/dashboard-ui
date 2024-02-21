import React, { useEffect, useRef, useState } from 'react';
import {
  IoSearchOutline,
  IoLanguageOutline,
  IoSunnyOutline,
  IoNotificationsOutline,
} from 'react-icons/io5';
import { MdClear } from 'react-icons/md';
import { VscExtensions } from 'react-icons/vsc';
import { FiMenu } from 'react-icons/fi';
import { cn } from '../../utils/helpers';

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Header({ setIsOpen }: Props) {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearchBox) {
      searchInputRef?.current?.focus();
    }
  }, [showSearchBox]);

  useEffect(() => {
    const callback = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === '/') {
        setShowSearchBox(true);
      }
    };
    window.addEventListener('keydown', callback);
    return () => {
      window.removeEventListener('keydown', callback);
    };
  }, []);

  return (
    <header className="sticky top-0 z-10 mb-4 px-3 pt-4 backdrop-blur-md lg:px-6">
      <div className="relative flex w-full items-center justify-between rounded-md bg-white p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <FiMenu
            className="text-xl xl:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          />
          <div className="flex items-center gap-3">
            <IoSearchOutline
              className="text-xl"
              onClick={() => setShowSearchBox(true)}
            />
            <span className="text-primary-400 hidden cursor-default lg:block">
              {'Search (Ctrl + /)'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <IoLanguageOutline className="text-xl" />
          <IoSunnyOutline className="text-xl" />
          <VscExtensions className="text-xl" />
          <IoNotificationsOutline className="text-xl" />
          <figure>
            <img
              src="/avater-1.png"
              alt="profile image"
              className="h-[34px] w-[34px] rounded-full object-cover"
            />
          </figure>
        </div>
        <div
          className={cn(
            'absolute inset-0 hidden items-center rounded-md bg-white p-4',
            showSearchBox && 'flex',
          )}
        >
          <input
            ref={searchInputRef}
            placeholder="Search..."
            className="flex-1 focus:outline-none focus:ring-0"
          />
          <MdClear
            className="text-2xl"
            onClick={() => setShowSearchBox(false)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
