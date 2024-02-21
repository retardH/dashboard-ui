import { BsThreeDotsVertical } from 'react-icons/bs';
import { countriesSales } from '../../utils/constants';
import CountrySaleItem from './CountrySaleItem';

function CountriesSale() {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="mb-4 flex justify-between md:mb-6">
        <div>
          <h4 className="text-lg font-medium">Sales By Countries</h4>
          <p className="text-primary-400 text-sm">Monthly Sales Overview</p>
        </div>
        <BsThreeDotsVertical className="mt-1 text-xl" />
      </div>
      <div className="flex flex-col gap-4">
        {countriesSales.map((sale, index) => {
          return (
            <CountrySaleItem
              key={index}
              img={sale.img}
              name={sale.name}
              value={sale.value}
              rate={sale.rate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CountriesSale;
