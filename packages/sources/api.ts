/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    checkAvailabilitySource,
    createApplication,
    createAuthentication,
    createEndpoint,
    createSource,
    deleteApplication,
    deleteAuthentication,
    deleteEndpoint,
    deleteSource,
    getDocumentation,
    listApplicationTypeSources,
    listApplicationTypes,
    listApplications,
    listAuthentications,
    listEndpointAuthentications,
    listEndpoints,
    listSourceApplicationTypes,
    listSourceApplications,
    listSourceAuthentications,
    listSourceEndpoints,
    listSourceTypeSources,
    listSourceTypes,
    listSources,
    postGraphQL,
    showApplication,
    showApplicationType,
    showAuthentication,
    showEndpoint,
    showSource,
    showSourceType,
    updateApplication,
    updateAuthentication,
    updateEndpoint,
    updateSource,

  } from './index';

const endpointList = {
      checkAvailabilitySource,
    createApplication,
    createAuthentication,
    createEndpoint,
    createSource,
    deleteApplication,
    deleteAuthentication,
    deleteEndpoint,
    deleteSource,
    getDocumentation,
    listApplicationTypeSources,
    listApplicationTypes,
    listApplications,
    listAuthentications,
    listEndpointAuthentications,
    listEndpoints,
    listSourceApplicationTypes,
    listSourceApplications,
    listSourceAuthentications,
    listSourceEndpoints,
    listSourceTypeSources,
    listSourceTypes,
    listSources,
    postGraphQL,
    showApplication,
    showApplicationType,
    showAuthentication,
    showEndpoint,
    showSource,
    showSourceType,
    updateApplication,
    updateAuthentication,
    updateEndpoint,
    updateSource,


};

export const SourcesClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default SourcesClient;
