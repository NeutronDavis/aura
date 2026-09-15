import { UserRole } from '@/types/user';

export type Permission =
  | 'view:public'
  | 'booking:create'
  | 'booking:manage'
  | 'provider:onboard'
  | 'provider:manage_profile'
  | 'admin:access'
  | 'admin:verify_provider'
  | 'admin:moderate_content'
  | 'admin:audit_logs';

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  CUSTOMER: ['view:public', 'booking:create', 'booking:manage'],
  COMPANION: [
    'view:public',
    'booking:manage',
    'provider:onboard',
    'provider:manage_profile',
  ],
  ADMIN: [
    'view:public',
    'booking:manage',
    'provider:manage_profile',
    'admin:access',
    'admin:verify_provider',
    'admin:moderate_content',
    'admin:audit_logs',
  ],
};

export function hasPermission(role: UserRole | undefined, permission: Permission): boolean {
  if (!role) return permission === 'view:public';
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

export function canAccessArea(role: UserRole | undefined, area: 'customer' | 'provider' | 'admin'): boolean {
  if (!role) return false;
  if (role === 'ADMIN') return true;
  if (area === 'customer') return role === 'CUSTOMER';
  if (area === 'provider') return role === 'COMPANION';
  return false;
}
