function WebsiteAnalytics() {
  return (
    <div className="flex w-full items-center">
      <div>
        <h2 className="text-lg font-semibold text-white">Website Analytics</h2>
        <span className="text-sm text-white">Total 28% Conversion Rate</span>
        <figure className="my-1 flex w-full items-center justify-center">
          <img
            src="/world-png-1.png"
            alt="world png"
            className="h-[170px] w-[170px] md:hidden"
          />
        </figure>
        <div>
          <h4 className="my-4 font-medium text-white">Traffic</h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div className="col-span-1 flex items-center gap-1">
              <div className="bg-primary-800/20 col-span-1 rounded-md px-3 py-1 text-sm text-white">
                24h
              </div>
              <span className="text-white">Spend</span>
            </div>
            <div className="col-span-1 flex items-center gap-1">
              <div className="bg-primary-800/20 col-span-1 rounded-md px-3 py-1 text-sm text-white">
                1.1k
              </div>
              <span className="text-white">Sessions</span>
            </div>
            <div className="col-span-1 flex items-center gap-1">
              <div className="bg-primary-800/20 col-span-1 rounded-md px-3 py-1 text-sm text-white">
                500
              </div>
              <span className="text-white">Page Views</span>
            </div>
            <div className="col-span-1 flex items-center gap-1">
              <div className="bg-primary-800/20 col-span-1 rounded-md px-3 py-1 text-sm text-white">
                12%
              </div>
              <span className="text-white">Conversion</span>
            </div>
          </div>
        </div>
      </div>
      <figure className="flex flex-1 items-center justify-center">
        <img
          src="/world-png-1.png"
          alt="world png"
          className="hidden h-[170px] w-[170px] md:block"
        />
      </figure>
    </div>
  );
}

export default WebsiteAnalytics;
