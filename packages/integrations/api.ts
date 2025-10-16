/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    endpointResourceV1CreateEndpoint,
    endpointResourceV1DeleteEndpoint,
    endpointResourceV1DisableEndpoint,
    endpointResourceV1EnableEndpoint,
    endpointResourceV1GetDetailedEndpointHistory,
    endpointResourceV1GetEndpoint,
    endpointResourceV1GetEndpointHistory,
    endpointResourceV1GetEndpoints,
    endpointResourceV1GetOrCreateDrawerSubscriptionEndpoint,
    endpointResourceV1GetOrCreateEmailSubscriptionEndpoint,
    endpointResourceV1TestEndpoint,
    endpointResourceV1UpdateEndpoint,
    endpointResourceV1UpdateEventTypesLinkedToEndpoint,

  } from './index';

const endpointList = {
      endpointResourceV1CreateEndpoint,
    endpointResourceV1DeleteEndpoint,
    endpointResourceV1DisableEndpoint,
    endpointResourceV1EnableEndpoint,
    endpointResourceV1GetDetailedEndpointHistory,
    endpointResourceV1GetEndpoint,
    endpointResourceV1GetEndpointHistory,
    endpointResourceV1GetEndpoints,
    endpointResourceV1GetOrCreateDrawerSubscriptionEndpoint,
    endpointResourceV1GetOrCreateEmailSubscriptionEndpoint,
    endpointResourceV1TestEndpoint,
    endpointResourceV1UpdateEndpoint,
    endpointResourceV1UpdateEventTypesLinkedToEndpoint,


};

export const IntegrationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default IntegrationsClient;
