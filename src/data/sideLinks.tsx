import {
  IconApps,
  IconHome,
  IconLayoutDashboard,
  IconLibrary,
  IconUser,
  IconUsers,
} from '@tabler/icons-react';
import { Ticket } from 'lucide-react';

export interface NavLink {
  title: string;
  label?: string;
  href: string;
  icon: JSX.Element;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/admin/dashboard',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Category',
    label: '',
    href: '/admin/dashboard/category',
    icon: <IconLibrary size={18} />,
  },
  {
    title: 'Rooms',
    label: '',
    href: '/admin/dashboard/rooms',
    icon: <IconHome size={18} />,
  },
  {
    title: 'Slots',
    label: '',
    href: '/admin/dashboard/slots',
    icon: <IconApps size={18} />,
  },

  {
    title: 'Bookings',
    label: '',
    href: '/admin/dashboard/bookings',
    icon: <Ticket size={18} />,
  },

  {
    title: 'Users',
    label: '',
    href: '/admin/dashboard/users',
    icon: <IconUsers size={18} />,
  },

  {
    title: 'Profile',
    label: '',
    href: '/admin/dashboard/profile',
    icon: <IconUser size={18} />,
  },
];
