export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const publicNavItems: NavItem[] = [
  { label: 'Discover', href: '/discover' },
  { label: 'Companions', href: '/companions' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Locations', href: '/locations' },
  { label: 'Safety', href: '/safety' },
];

export const customerNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Discover', href: '/discover' },
  { label: 'Bookings', href: '/bookings' },
  { label: 'Messages', href: '/messages' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Safety Center', href: '/safety' },
];

export const providerNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Bookings', href: '/bookings' },
  { label: 'Availability', href: '/availability' },
  { label: 'Earnings', href: '/earnings' },
  { label: 'Messages', href: '/messages' },
  { label: 'Verification', href: '/verification' },
];

export const adminNavItems: NavItem[] = [
  { label: 'Overview', href: '/admin/dashboard' },
  { label: 'Users', href: '/admin/users' },
  { label: 'Verification', href: '/admin/verification' },
  { label: 'Moderation', href: '/admin/moderation' },
  { label: 'Bookings', href: '/admin/bookings' },
  { label: 'Payments', href: '/admin/payments' },
  { label: 'Disputes', href: '/admin/disputes' },
  { label: 'Reports', href: '/admin/reports' },
  { label: 'Audit Logs', href: '/admin/audit-logs' },
];
