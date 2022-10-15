import { IMenu } from "./menu.interface";

export const MENU_ITEMS: IMenu[] = [
  {
    title: 'Home',
    icon: 'fa regular fa-house',
    url: ''
  },
  {
    title: 'Report',
    icon: 'fa regular fa-house',
    url: '/report'
  },
  {
    title: 'Case',
    icon: 'fa regular fa-house',
    url: '/case-file'
  },
  {
    title: 'Fraud',
    icon: 'fa regular fa-house',
    url: '/fraud'
  },
  {
    title: 'Users',
    icon: 'fa regular fa-house',
    url: '/identity/users'
  },
  {
    title: 'Roles',
    icon: 'fa regular fa-house',
    url: '/identity/roles'
  },
  {
    title: 'Tenants',
    icon: 'fa regular fa-house',
    url: '/tenant-management/tenants'
  }
]