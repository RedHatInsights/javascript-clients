import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/common'
import {
    endpointResourceV3CreateEndpoint,
    endpointResourceV3DeleteEndpoint,
    endpointResourceV3DeleteEndpointSecrets,
    endpointResourceV3DisableEndpoint,
    endpointResourceV3EnableEndpoint,
    endpointResourceV3GetDetailedEndpointHistory,
    endpointResourceV3GetEndpoint,
    endpointResourceV3GetEndpointHistory,
    endpointResourceV3GetEndpoints,
    endpointResourceV3TestEndpoint,
    endpointResourceV3UpdateEndpoint,
    endpointResourceV3UpdateEndpointSecrets,

  } from './index';

const endpointList = {
      endpointResourceV3CreateEndpoint,
    endpointResourceV3DeleteEndpoint,
    endpointResourceV3DeleteEndpointSecrets,
    endpointResourceV3DisableEndpoint,
    endpointResourceV3EnableEndpoint,
    endpointResourceV3GetDetailedEndpointHistory,
    endpointResourceV3GetEndpoint,
    endpointResourceV3GetEndpointHistory,
    endpointResourceV3GetEndpoints,
    endpointResourceV3TestEndpoint,
    endpointResourceV3UpdateEndpoint,
    endpointResourceV3UpdateEndpointSecrets,


};

export const IntegrationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default IntegrationsClient;
