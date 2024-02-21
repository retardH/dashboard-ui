import { MdOutlineShoppingCart } from 'react-icons/md';
import { PiLinkSimpleBold } from 'react-icons/pi';

function SalesOverview() {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="text-primary-400 text-sm">Sales Overview</p>
          <p className="text-xl font-medium">$42.5K</p>
        </div>
        <p className="text-sm text-green-500">+18.2%</p>
      </div>
      <div className="mb-6 flex items-stretch justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <button className="rounded-md bg-cyan-400/30 p-1">
              <MdOutlineShoppingCart className="fill-cyan-500 text-cyan-400" />
            </button>
            <h4 className="text-primary-500">Orders</h4>
          </div>
          <p className="text-lg font-medium">62.2%</p>
          <p className="text-primary-400 text-sm font-medium">623</p>
        </div>
        <div className="bg-primary-400 min-h-[80px] w-[1px]"></div>
        <div>
          <div className="mb-2 flex items-center gap-2">
            <button className="rounded-md bg-violet-400/30 p-1">
              <PiLinkSimpleBold className="fill-violet-500 text-violet-400" />
            </button>
            <h4 className="text-primary-500">Visits</h4>
          </div>
          <p className="text-lg font-medium">25.5%</p>
          <p className="text-primary-400 text-sm font-medium">12449</p>
        </div>
      </div>
      <div className="flex h-[8px] w-full items-center overflow-hidden rounded-md">
        <div className="h-full w-8/12 bg-cyan-400"></div>
        <div className="h-full w-4/12 bg-violet-400"></div>
      </div>
    </div>
  );
}

export default SalesOverview;
