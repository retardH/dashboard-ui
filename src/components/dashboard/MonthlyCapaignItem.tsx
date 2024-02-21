import { cn } from '../../utils/helper';

interface Props {
  icon: JSX.Element;
  color: string;
  bgColor: string;
  text: string;
  count: string;
  rate: string;
}
function MonthlyCapaignItem({
  icon,
  color,
  bgColor,
  text,
  count,
  rate,
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className={cn('rounded-md p-2', bgColor)}>{icon}</button>
        <h4>{text}</h4>
      </div>
      <div className="flex items-center gap-4">
        <h4>{count}</h4>
        <span className={cn(color)}>{rate}%</span>
      </div>
    </div>
  );
}

export default MonthlyCapaignItem;
