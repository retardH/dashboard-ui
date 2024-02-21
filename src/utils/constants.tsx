import { RiHomeSmile2Line, RiLayoutLeftLine } from 'react-icons/ri';
import {
  MdOutlineFindInPage,
  MdOutlineEmail,
  MdOutlineCalendarToday,
  MdOutlineChatBubbleOutline,
  MdOutlineShoppingCart,
  MdMenuBook,
} from 'react-icons/md';
import { TbLayoutKanban, TbWorldLatitude } from 'react-icons/tb';
import { BsTruck } from 'react-icons/bs';
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import { LuUsers } from 'react-icons/lu';
import { PiLinkSimpleBold, PiCursorClickLight } from 'react-icons/pi';
import { AiOutlineStop } from 'react-icons/ai';
import { CiWarning, CiStar } from 'react-icons/ci';
import { GoLinkExternal } from 'react-icons/go';
import { FiSettings } from 'react-icons/fi';

type MenuItem = {
  title: string;
  icon: JSX.Element;
  key?: string;
  subMenuItems?: { title: string; key?: string }[];
};

export const sidebarMenuItems: MenuItem[] = [
  {
    title: 'Dashboards',
    icon: <RiHomeSmile2Line />,
    key: '/',
    subMenuItems: [
      {
        title: 'Analytics',
        key: '/',
      },
      {
        title: 'CRM',
      },
      {
        title: 'eCommerce',
      },
      {
        title: 'Logistics',
      },
    ],
  },
  {
    title: 'Layouts',
    icon: <RiLayoutLeftLine />,
    subMenuItems: [
      {
        title: 'Fixed',
      },
      {
        title: 'Auto',
      },
      {
        title: 'Flexible',
      },
      {
        title: 'Another Layout',
      },
    ],
  },
  {
    title: 'Front Pages',
    icon: <MdOutlineFindInPage />,
    subMenuItems: [
      {
        title: 'Home',
      },
      {
        title: 'About',
      },
      {
        title: 'Contact',
      },
      {
        title: 'Another Page',
      },
    ],
  },
];

export const appAndPages: MenuItem[] = [
  {
    title: 'Email',
    icon: <MdOutlineEmail />,
  },
  {
    title: 'Chat',
    icon: <MdOutlineChatBubbleOutline />,
  },
  {
    title: 'Calendar',
    icon: <MdOutlineCalendarToday />,
  },
  {
    title: 'Kanban',
    icon: <TbLayoutKanban />,
  },
  {
    title: 'eCommerce',
    icon: <MdOutlineShoppingCart />,
  },
  {
    title: 'Academy',
    icon: <MdMenuBook />,
  },
  {
    title: 'Logistics',
    icon: <BsTruck />,
  },
  {
    title: 'Invoices',
    icon: <LiaFileInvoiceDollarSolid />,
  },
  {
    title: 'Users',
    icon: <LuUsers />,
  },
];

export const countriesSales = [
  {
    img: '/united-states.png',
    name: 'United States',
    value: '456',
    rate: '25.8',
  },
  {
    img: '/brazil.png',
    name: 'Brazil',
    value: '300',
    rate: '10.1',
  },
  {
    img: '/hong-kong.png',
    name: 'Hong Kong',
    value: '444',
    rate: '19.2',
  },
  {
    img: '/china.png',
    name: 'China',
    value: '322',
    rate: '9.8',
  },
  {
    img: '/united-states.png',
    name: 'United States',
    value: '456',
    rate: '25.8',
  },
];

export const monthlyCampaignStates = [
  {
    name: 'Emails',
    color: 'text-green-500',
    bgColor: 'bg-green-400/30',
    count: '12,346',
    rate: '0.3',
    icon: <MdOutlineEmail className="fill-green-500 text-xl" />,
  },
  {
    name: 'Opened',
    color: 'text-blue-500',
    bgColor: 'bg-blue-400/30',
    count: '8,127',
    rate: '2.1',
    icon: <PiLinkSimpleBold className="fill-blue-500 text-xl" />,
  },
  {
    name: 'Clicked',
    color: 'text-orange-500',
    bgColor: 'bg-orange-400/30',
    count: '967',
    rate: '0.3',
    icon: <PiCursorClickLight className="fill-orange-500 text-xl" />,
  },
  {
    name: 'Subscribe',
    color: 'text-violet-500',
    bgColor: 'bg-violet-400/30',
    count: '345',
    rate: '8.5',
    icon: <LuUsers className="text-xl text-violet-500" />,
  },
  {
    name: 'Complaints',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-400/30',
    count: '10',
    rate: '1.5',
    icon: <CiWarning className="fill-yellow-500 text-xl" />,
  },
  {
    name: 'Unsubscribe',
    color: 'text-red-500',
    bgColor: 'bg-red-400/30',
    count: '86',
    rate: '0.3',
    icon: <AiOutlineStop className="fill-red-500 text-xl" />,
  },
];

export const sourceVisitItems = [
  {
    name: 'Emails Newsletter',
    desc: 'Mail Campaigns',
    count: '893',
    rate: 2.4,
    icon: <MdOutlineEmail className="fill-stone-500 text-xl" />,
  },
  {
    name: 'Direct Source',
    desc: 'Direct Link Click',
    count: '1.2k',
    rate: 4.2,
    icon: <TbWorldLatitude className="text-xl text-stone-500" />,
  },
  {
    name: 'Referrals',
    desc: 'Impact Radius Visits',
    count: '342',
    rate: 2.2,
    icon: <GoLinkExternal className="fill-stone-500 text-xl" />,
  },
  {
    name: 'ADVT',
    desc: 'Google ADVT',
    count: '2.15k',
    rate: 9.2,
    icon: <FiSettings className="text-xl text-stone-500" />,
  },
  {
    name: 'Other',
    desc: 'Many Sources',
    count: '12k',
    rate: 6.2,
    icon: <CiStar className="fill-stone-500 text-xl" />,
  },
];
