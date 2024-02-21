import { BsThreeDotsVertical } from 'react-icons/bs';
import { monthlyCampaignStates } from '../../utils/constants';
import MonthlyCapaignItem from './MonthlyCapaignItem';

function MonthlyCampaign() {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="mb-4 flex justify-between md:mb-6">
        <div>
          <h4 className="text-lg font-medium">Monthly Campaign State</h4>
          <p className="text-primary-400 text-sm"> 8.52k Social Visiters </p>
        </div>
        <BsThreeDotsVertical className="mt-1 text-xl" />
      </div>
      <div className="flex flex-col gap-4">
        {monthlyCampaignStates.map((state) => {
          return (
            <MonthlyCapaignItem
              key={state.name}
              icon={state.icon}
              text={state.name}
              color={state.color}
              bgColor={state.bgColor}
              count={state.count}
              rate={state.rate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MonthlyCampaign;
