import React from 'react';
import { cn } from '../../utils/helper';
import { MdClear } from 'react-icons/md';
import { appAndPages, sidebarMenuItems } from '../../utils/constants';
import MenuItem from '../MenuItem';
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Sidebar({ isOpen, setIsOpen }: Props) {
  return (
    <>
      <aside
        className={cn(
          'fixed top-0 z-50 h-screen max-h-screen w-[240px] overflow-y-scroll bg-white p-5 shadow-sm transition-all duration-300 lg:py-6 xl:static xl:block',
          isOpen ? 'left-0' : '-left-[90%] xl:left-0',
        )}
      >
        <div className="mb-4 flex items-center justify-between lg:mb-6">
          <div className="flex items-center gap-1.5">
            <img src="/logo.svg" alt="logo" />
            <h2 className="text-lg font-medium xl:text-xl">Admin</h2>
          </div>
          <MdClear
            className="text-2xl lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex flex-col">
          {sidebarMenuItems.map((item) => {
            return <MenuItem key={item.title} item={item} selectedKey="/" />;
          })}
        </div>
        <h4 className="text-primary-400 my-4 px-4">App & Pages</h4>
        <div className="flex flex-col">
          {appAndPages.map((item) => {
            return <MenuItem key={item.title} item={item} selectedKey="/" />;
          })}
        </div>
      </aside>
      {/* Overlay Effect */}
      <div
        className={cn(
          'pointer-events-none fixed z-30 h-full w-full bg-slate-600/30 opacity-0 transition-all',
          isOpen && 'pointer-events-auto opacity-100',
        )}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}

export default Sidebar;
