import SalesOverview from '../components/dashboard/SalesOverview';
import Revenue from '../components/dashboard/Revenue';
import EarningReport from '../components/dashboard/EarningReport';
import SupportTracker from '../components/dashboard/SupportTracker';
import WebsiteAnalyticsSlide from '../components/dashboard/WebsiteAnalyticsSlide';
import CountriesSale from '../components/dashboard/CountriesSale';
import MonthlyCampaign from '../components/dashboard/MonthlyCampaign';
import SourceVisits from '../components/dashboard/SourceVisits';

function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-6 overflow-y-scroll px-3 pb-4 lg:px-6">
      <div className="col-span-full rounded-md bg-violet-500 shadow-md lg:col-span-6">
        <WebsiteAnalyticsSlide />
      </div>
      <div className="col-span-full rounded-md bg-white p-4 shadow-md md:col-span-6 lg:col-span-3 lg:p-6">
        <SalesOverview />
      </div>
      <div className="col-span-full rounded-md bg-white shadow-md md:col-span-6 lg:col-span-3">
        <Revenue />
      </div>
      <div className="col-span-full rounded-md bg-white p-4 shadow-md lg:col-span-6 lg:p-6">
        <EarningReport />
      </div>
      <div className="col-span-full rounded-md bg-white p-4 shadow-md md:col-span-6 lg:col-span-6 lg:p-6">
        <SupportTracker />
      </div>
      <div className="col-span-full rounded-md bg-white p-4 shadow-md sm:col-span-6 lg:p-6 xl:col-span-4">
        <CountriesSale />
      </div>
      <div className="col-span-full rounded-md bg-white p-4 shadow-md sm:col-span-6 lg:p-6 xl:col-span-4">
        <MonthlyCampaign />
      </div>
      <div className="col-span-full rounded-md bg-white p-4 shadow-md sm:col-span-6 lg:p-6 xl:col-span-4">
        <SourceVisits />
      </div>
    </div>
  );
}

export default Dashboard;
