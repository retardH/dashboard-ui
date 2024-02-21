import 'react-circular-progressbar/dist/styles.css';
import { BsTicketPerforated, BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdOutlineAccessTime } from 'react-icons/md';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import ProgressBarSeparator from './ProgressBarSeperator';

function SupportTracker() {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="mb-1 flex justify-between md:mb-6 xl:mb-10">
        <div>
          <h4 className="text-lg font-medium">Support Tracker</h4>
          <p className="text-primary-400 text-sm">Last 7 Days</p>
        </div>
        <BsThreeDotsVertical className="mt-1 text-xl" />
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div>
          <div className="mb-6">
            <h4 className="text-2xl font-semibold xl:text-3xl">164</h4>
            <p className="">Total Tickets</p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex items-center gap-4">
              <button className="rounded-md bg-violet-500/30 p-2">
                <BsTicketPerforated className="fill-violet-500 text-violet-500" />
              </button>
              <div>
                <h4>New Tickets</h4>
                <span className="text-primary-400 text-xs">142</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-md bg-green-500/30 p-2">
                <FaRegCheckCircle className="fill-green-500 text-green-500" />
              </button>
              <div>
                <h4>Open Tickets</h4>
                <span className="text-primary-400 text-xs">28</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-md bg-orange-500/30 p-2">
                <MdOutlineAccessTime className="fill-orange-500 text-orange-500" />
              </button>
              <div>
                <h4>Response Time</h4>
                <span className="text-primary-400 text-xs">1 Day</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="h-full w-8/12">
            <CircularProgressbarWithChildren
              value={70}
              strokeWidth={10}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: '#7c3aed',
                trailColor: '#f5f3ff',
                textColor: '#44403c',
                textSize: '18px',
              })}
            >
              <div className="text-primary-400 text-sm font-semibold">
                Completed Tasks
              </div>
              <div className="text-3xl">70%</div>
              <ProgressBarSeparator
                count={28}
                style={{
                  background: '#fff',
                  width: '2px',
                  height: `${10}%`,
                }}
              />
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportTracker;
