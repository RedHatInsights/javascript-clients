/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    endpointResourceV2GetEndpoint,
    endpointResourceV2GetEndpointHistory,
    endpointResourceV2GetEndpoints,

  } from './index';

const endpointList = {
      endpointResourceV2GetEndpoint,
    endpointResourceV2GetEndpointHistory,
    endpointResourceV2GetEndpoints,


};

export const IntegrationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default IntegrationsClient;
