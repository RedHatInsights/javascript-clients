/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    endpointResourceV1AddEventTypeToEndpoint,
    endpointResourceV1CreateEndpoint,
    endpointResourceV1DeleteEndpoint,
    endpointResourceV1DeleteEventTypeFromEndpoint,
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

export const IntegrationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, {
    endpointResourceV1AddEventTypeToEndpoint,
    endpointResourceV1CreateEndpoint,
    endpointResourceV1DeleteEndpoint,
    endpointResourceV1DeleteEventTypeFromEndpoint,
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

  },
  instance);
}

export default IntegrationsClient;
