/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    endpointResourceV2CreateEndpoint,EndpointResourceV2CreateEndpointReturnType,
    endpointResourceV2DeleteEndpoint,EndpointResourceV2DeleteEndpointReturnType,
    endpointResourceV2DisableEndpoint,EndpointResourceV2DisableEndpointReturnType,
    endpointResourceV2EnableEndpoint,EndpointResourceV2EnableEndpointReturnType,
    endpointResourceV2GetDetailedEndpointHistory,EndpointResourceV2GetDetailedEndpointHistoryReturnType,
    endpointResourceV2GetEndpoint,EndpointResourceV2GetEndpointReturnType,
    endpointResourceV2GetEndpointHistory,EndpointResourceV2GetEndpointHistoryReturnType,
    endpointResourceV2GetEndpoints,EndpointResourceV2GetEndpointsReturnType,
    endpointResourceV2GetOrCreateDrawerSubscriptionEndpoint,EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointReturnType,
    endpointResourceV2GetOrCreateEmailSubscriptionEndpoint,EndpointResourceV2GetOrCreateEmailSubscriptionEndpointReturnType,
    endpointResourceV2TestEndpoint,EndpointResourceV2TestEndpointReturnType,
    endpointResourceV2UpdateEndpoint,EndpointResourceV2UpdateEndpointReturnType,
    endpointResourceV2UpdateEventTypesLinkedToEndpoint,EndpointResourceV2UpdateEventTypesLinkedToEndpointReturnType,

  } from './index';

const endpointList = {
      endpointResourceV2CreateEndpoint,
    endpointResourceV2DeleteEndpoint,
    endpointResourceV2DisableEndpoint,
    endpointResourceV2EnableEndpoint,
    endpointResourceV2GetDetailedEndpointHistory,
    endpointResourceV2GetEndpoint,
    endpointResourceV2GetEndpointHistory,
    endpointResourceV2GetEndpoints,
    endpointResourceV2GetOrCreateDrawerSubscriptionEndpoint,
    endpointResourceV2GetOrCreateEmailSubscriptionEndpoint,
    endpointResourceV2TestEndpoint,
    endpointResourceV2UpdateEndpoint,
    endpointResourceV2UpdateEventTypesLinkedToEndpoint,


};

type endpointReturnTypes = {
      endpointResourceV2CreateEndpoint: EndpointResourceV2CreateEndpointReturnType,
    endpointResourceV2DeleteEndpoint: EndpointResourceV2DeleteEndpointReturnType,
    endpointResourceV2DisableEndpoint: EndpointResourceV2DisableEndpointReturnType,
    endpointResourceV2EnableEndpoint: EndpointResourceV2EnableEndpointReturnType,
    endpointResourceV2GetDetailedEndpointHistory: EndpointResourceV2GetDetailedEndpointHistoryReturnType,
    endpointResourceV2GetEndpoint: EndpointResourceV2GetEndpointReturnType,
    endpointResourceV2GetEndpointHistory: EndpointResourceV2GetEndpointHistoryReturnType,
    endpointResourceV2GetEndpoints: EndpointResourceV2GetEndpointsReturnType,
    endpointResourceV2GetOrCreateDrawerSubscriptionEndpoint: EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointReturnType,
    endpointResourceV2GetOrCreateEmailSubscriptionEndpoint: EndpointResourceV2GetOrCreateEmailSubscriptionEndpointReturnType,
    endpointResourceV2TestEndpoint: EndpointResourceV2TestEndpointReturnType,
    endpointResourceV2UpdateEndpoint: EndpointResourceV2UpdateEndpointReturnType,
    endpointResourceV2UpdateEventTypesLinkedToEndpoint: EndpointResourceV2UpdateEventTypesLinkedToEndpointReturnType,


};

export const IntegrationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory<typeof endpointList, endpointReturnTypes>(BASE_PATH, endpointList, instance);
}

export default IntegrationsClient;
