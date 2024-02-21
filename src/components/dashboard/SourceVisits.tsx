import { BsThreeDotsVertical } from 'react-icons/bs';
import { sourceVisitItems } from '../../utils/constants';
import SourceVisitItem from './SourceVisitItem';

function SourceVisits() {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="mb-4 flex justify-between md:mb-6">
        <div>
          <h4 className="text-lg font-medium">Source Visits</h4>
          <p className="text-primary-400 text-sm">38.4k Visitors</p>
        </div>
        <BsThreeDotsVertical className="mt-1 text-xl" />
      </div>
      <div className="flex flex-col gap-4">
        {sourceVisitItems.map((item) => {
          return (
            <SourceVisitItem
              key={item.name}
              icon={item.icon}
              count={item.count}
              rate={item.rate}
              text={item.name}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SourceVisits;
