/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    endpointResourceV1AddEventTypeToEndpoint,EndpointResourceV1AddEventTypeToEndpointReturnType,
    endpointResourceV1CreateEndpoint,EndpointResourceV1CreateEndpointReturnType,
    endpointResourceV1DeleteEndpoint,EndpointResourceV1DeleteEndpointReturnType,
    endpointResourceV1DeleteEventTypeFromEndpoint,EndpointResourceV1DeleteEventTypeFromEndpointReturnType,
    endpointResourceV1DisableEndpoint,EndpointResourceV1DisableEndpointReturnType,
    endpointResourceV1EnableEndpoint,EndpointResourceV1EnableEndpointReturnType,
    endpointResourceV1GetDetailedEndpointHistory,EndpointResourceV1GetDetailedEndpointHistoryReturnType,
    endpointResourceV1GetEndpoint,EndpointResourceV1GetEndpointReturnType,
    endpointResourceV1GetEndpointHistory,EndpointResourceV1GetEndpointHistoryReturnType,
    endpointResourceV1GetEndpoints,EndpointResourceV1GetEndpointsReturnType,
    endpointResourceV1GetOrCreateDrawerSubscriptionEndpoint,EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointReturnType,
    endpointResourceV1GetOrCreateEmailSubscriptionEndpoint,EndpointResourceV1GetOrCreateEmailSubscriptionEndpointReturnType,
    endpointResourceV1TestEndpoint,EndpointResourceV1TestEndpointReturnType,
    endpointResourceV1UpdateEndpoint,EndpointResourceV1UpdateEndpointReturnType,
    endpointResourceV1UpdateEventTypesLinkedToEndpoint,EndpointResourceV1UpdateEventTypesLinkedToEndpointReturnType,

  } from './index';

const endpointList = {
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


};

type endpointReturnTypes = {
      endpointResourceV1AddEventTypeToEndpoint: EndpointResourceV1AddEventTypeToEndpointReturnType,
    endpointResourceV1CreateEndpoint: EndpointResourceV1CreateEndpointReturnType,
    endpointResourceV1DeleteEndpoint: EndpointResourceV1DeleteEndpointReturnType,
    endpointResourceV1DeleteEventTypeFromEndpoint: EndpointResourceV1DeleteEventTypeFromEndpointReturnType,
    endpointResourceV1DisableEndpoint: EndpointResourceV1DisableEndpointReturnType,
    endpointResourceV1EnableEndpoint: EndpointResourceV1EnableEndpointReturnType,
    endpointResourceV1GetDetailedEndpointHistory: EndpointResourceV1GetDetailedEndpointHistoryReturnType,
    endpointResourceV1GetEndpoint: EndpointResourceV1GetEndpointReturnType,
    endpointResourceV1GetEndpointHistory: EndpointResourceV1GetEndpointHistoryReturnType,
    endpointResourceV1GetEndpoints: EndpointResourceV1GetEndpointsReturnType,
    endpointResourceV1GetOrCreateDrawerSubscriptionEndpoint: EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointReturnType,
    endpointResourceV1GetOrCreateEmailSubscriptionEndpoint: EndpointResourceV1GetOrCreateEmailSubscriptionEndpointReturnType,
    endpointResourceV1TestEndpoint: EndpointResourceV1TestEndpointReturnType,
    endpointResourceV1UpdateEndpoint: EndpointResourceV1UpdateEndpointReturnType,
    endpointResourceV1UpdateEventTypesLinkedToEndpoint: EndpointResourceV1UpdateEventTypesLinkedToEndpointReturnType,


};

export const IntegrationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory<typeof endpointList, endpointReturnTypes>(BASE_PATH, endpointList, instance);
}

export default IntegrationsClient;
