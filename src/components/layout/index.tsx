import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface Props extends React.PropsWithChildren {}
function MainLayout({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="max-h-screen flex-1 overflow-y-scroll">
        <Header setIsOpen={setIsSidebarOpen} />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
