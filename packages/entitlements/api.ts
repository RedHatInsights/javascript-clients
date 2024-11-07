/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    servicesGet,

  } from './index';

export const EntitlementsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, {
    servicesGet,

  },
  instance);
}

export default EntitlementsClient;
