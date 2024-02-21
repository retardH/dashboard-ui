import { useState } from 'react';
import { MdOutlineChevronRight } from 'react-icons/md';
import { GoDot } from 'react-icons/go';
import { cn } from '../utils/helper';
import { sidebarMenuItems } from '../utils/constants';

interface Props {
  item: (typeof sidebarMenuItems)[0];
  selectedKey: string;
}
function MenuItem({ item, selectedKey }: Props) {
  const [openItems, setOpenItems] = useState(false);
  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          'my-1 flex cursor-pointer items-center justify-between rounded-md px-4 py-2 transition-all hover:bg-stone-100',
          item?.key === selectedKey && 'bg-stone-100',
        )}
        onClick={() => setOpenItems(!openItems)}
      >
        <div className="flex items-center gap-3">
          {item.icon}
          <span>{item.title}</span>
        </div>
        {!!item?.subMenuItems && (
          <MdOutlineChevronRight
            className={cn(
              'rotate-0 text-lg transition-all',
              openItems && 'rotate-90',
            )}
          />
        )}
      </div>
      <div
        className={cn(
          'transition-height flex h-0 flex-col',
          openItems && 'h-[160px]',
        )}
      >
        {item.subMenuItems &&
          item.subMenuItems.map((sub) => {
            return (
              <div
                key={sub.title}
                className={cn(
                  'flex items-center gap-2 rounded-md px-4 py-2 transition-all',
                  sub.key === selectedKey &&
                    'bg-violet-500 text-white shadow-md',
                )}
              >
                <GoDot
                  className={cn(sub.key === selectedKey && 'fill-white')}
                />
                <span className="text-inherit">{sub.title}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MenuItem;
