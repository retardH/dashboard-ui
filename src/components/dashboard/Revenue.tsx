import RevenueChart from './RevenueChart';
import { BiWallet } from 'react-icons/bi';

function Revenue() {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex flex-col gap-1 p-4 lg:p-6">
        <button className="max-w-min rounded-full bg-green-400/30 p-1.5">
          <BiWallet className="fill-green-500 text-green-400" />
        </button>
        <p className="text-lg font-medium">97.5K</p>
        <p className="text-primary-500 text-sm">Revenues Generated</p>
      </div>
      <RevenueChart />
    </div>
  );
}

export default Revenue;
