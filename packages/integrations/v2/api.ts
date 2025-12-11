/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    endpointResourceV2V2GetEndpoint,
    endpointResourceV2V2GetEndpointHistory,
    endpointResourceV2V2GetEndpoints,

  } from './index';

const endpointList = {
      endpointResourceV2V2GetEndpoint,
    endpointResourceV2V2GetEndpointHistory,
    endpointResourceV2V2GetEndpoints,


};

export const IntegrationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default IntegrationsClient;
