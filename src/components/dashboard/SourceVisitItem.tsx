import { cn } from '../../utils/helpers';

interface Props {
  icon: JSX.Element;
  text: string;
  count: string;
  rate: number;
  desc: string;
}
function SourceVisitItem({ icon, text, count, rate, desc }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="bg-primary-400/30 rounded-md p-2">{icon}</button>
        <div>
          <h4>{text}</h4>
          <span className="text-primary-400 text-sm">{desc}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h4>{count}</h4>
        <span
          className={cn(
            'block rounded-md bg-green-400/30 px-2 py-1 text-xs text-green-500',
          )}
        >
          +{rate}%
        </span>
      </div>
    </div>
  );
}

export default SourceVisitItem;
