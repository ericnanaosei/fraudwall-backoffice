import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Fraudwall',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44353',
    redirectUri: baseUrl,
    clientId: 'fraudwall_backoffice_App',
    responseType: 'code',
    scope: 'offline_access fraudwall_backoffice',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44353',
      rootNamespace: 'fraudwall_backoffice',
    },
    webapi: {
      url: 'http://localhost:3000/api',
    }
  },
} as Environment;
