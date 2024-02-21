import { cn } from '../../utils/helpers';

interface Props {
  title: string;
  icon: JSX.Element;
  value: string;
  color: string;
}
function EarningReportBox({ title, icon, value, color }: Props) {
  return (
    <>
      <div className="mb-2 flex items-center gap-2">
        {/* <button className="rounded-md bg-violet-500/30 p-2">
          <FaDollarSign className="fill-violet-500 text-violet-500" />
        </button> */}
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <p className="mb-2 text-xl font-medium">${value}</p>
      <div className="bg-primary-200 h-[4px] w-full overflow-hidden rounded-md">
        <div className={cn('h-full w-8/12', color)}></div>
      </div>
    </>
  );
}

export default EarningReportBox;
