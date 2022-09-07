import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'fraudwall_backoffice',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44353',
    redirectUri: baseUrl,
    clientId: 'fraudwall_backoffice_App',
    responseType: 'code',
    scope: 'offline_access fraudwall_backoffice',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44353',
      rootNamespace: 'fraudwall_backoffice',
    },
  },
} as Environment;
