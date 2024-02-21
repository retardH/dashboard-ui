import { cn } from '../../utils/helper';
import { FaChevronUp } from 'react-icons/fa';

interface Props {
  img: string;
  name: string;
  value: string;
  rate: string;
}
function CountrySaleItem({ img, name, value, rate }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={img}
          alt="icon"
          className="h-[36px] w-[36px] rounded-full object-cover"
        />
        <div>
          <h4>${value}K</h4>
          <span className="text-primary-400 text-sm">{name}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FaChevronUp
          className={cn(
            +rate < 11 ? 'rotate-180 fill-red-500' : 'fill-green-500',
          )}
        />
        <span className={cn(+rate < 11 ? 'text-red-500' : 'text-green-500')}>
          {rate}%
        </span>
      </div>
    </div>
  );
}

export default CountrySaleItem;
