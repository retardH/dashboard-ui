import EarningBarChart from './EarningBarChart';
import { FaDollarSign } from 'react-icons/fa6';
import { MdOutlineAccessTime } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { SlPaypal } from 'react-icons/sl';
import EarningReportBox from './EarningReportBox';

function EarningReport() {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex justify-between">
        <div>
          <h4 className="text-lg font-medium">Earning Reports</h4>
          <p className="text-primary-400 text-sm">Weekly Earning Overview</p>
        </div>
        <BsThreeDotsVertical className="mt-1 text-xl    " />
      </div>
      <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-end md:justify-start">
        <div className="">
          <h4 className="text-primary-600 text-2xl font-semibold xl:text-3xl">
            $468
          </h4>
          <p className="text-primary-400 mb-2.5 text-wrap text-xs md:max-w-[170px]">
            You informed of this week compared to last week.
          </p>
        </div>
        <div className="flex-1">
          <EarningBarChart />
        </div>
      </div>
      <div className="border-primary-200/90 flex w-full flex-col gap-8 rounded-md border p-4 md:flex-row md:items-center xl:gap-12">
        <div className="flex-1">
          <EarningReportBox
            title="Earning"
            icon={
              <button className="rounded-md bg-violet-500/30 p-2">
                <FaDollarSign className="fill-violet-500 text-violet-500" />
              </button>
            }
            value="545.69"
            color="bg-violet-500"
          />
        </div>
        <div className="flex-1">
          <EarningReportBox
            title="Profit"
            icon={
              <button className="rounded-md bg-cyan-500/30 p-2">
                <MdOutlineAccessTime className="fill-cyan-500 text-cyan-500" />
              </button>
            }
            value="256.29"
            color="bg-cyan-500"
          />
        </div>
        <div className="flex-1">
          <EarningReportBox
            title="Expense"
            icon={
              <button className="rounded-md bg-orange-500/30 p-2">
                <SlPaypal className="fill-orange-500 text-orange-500" />
              </button>
            }
            value="74.10"
            color="bg-orange-500"
          />
          {/* <div className="mb-2 flex items-center gap-2">
            <button className="rounded-md bg-violet-500/30 p-2">
              <FaDollarSign className="fill-violet-500 text-violet-500" />
            </button>
            <span className="font-medium">Earning</span>
          </div>
          <p className="mb-2 text-xl font-medium">$545.69</p>
          <div className="bg-primary-200 h-[4px] w-full overflow-hidden rounded-md">
            <div className="h-full w-8/12 bg-violet-500"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default EarningReport;
