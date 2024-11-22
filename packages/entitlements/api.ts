/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    servicesGet,ServicesGetReturnType,

  } from './index';

const endpointList = {
      servicesGet,


};

type endpointReturnTypes = {
      servicesGet: ServicesGetReturnType,


};

export const EntitlementsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory<typeof endpointList, endpointReturnTypes>(BASE_PATH, endpointList, instance);
}

export default EntitlementsClient;
