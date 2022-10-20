import { IMenu } from "./menu.interface";

export const MENU_ITEMS: IMenu[] = [
  {
    title: 'Home',
    icon: 'bi bi-house',
    url: ''
  },
  {
    title: 'Report',
    icon: 'bi bi-folder-symlink',
    url: '/report'
  },
  {
    title: 'Case',
    icon: 'bi bi-stack',
    url: '/case-file'
  },
  {
    title: 'Fraud',
    icon: 'bi bi-shield-fill-exclamation',
    url: '/fraud'
  },
  {
    title: 'Users',
    icon: 'bi bi-people',
    url: '/identity/users'
  },
  {
    title: 'Roles',
    icon: 'bi bi-tools',
    url: '/identity/roles'
  },
  {
    title: 'Tenants',
    icon: 'bi bi-gear-fill',
    url: '/tenant-management/tenants'
  }
]