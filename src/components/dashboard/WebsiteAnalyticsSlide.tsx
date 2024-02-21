import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import WebsiteAnalytics from './WebsiteAnalytics';

function WebsiteAnalyticsSlide() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        loop={true}
        className="relative"
      >
        <SwiperSlide className="p-4 py-8 lg:px-6">
          <WebsiteAnalytics />
        </SwiperSlide>
        <SwiperSlide className="p-4 py-8 lg:px-6">
          <WebsiteAnalytics />
        </SwiperSlide>
        <SwiperSlide className="p-4 py-8 lg:px-6">
          <WebsiteAnalytics />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default WebsiteAnalyticsSlide;
