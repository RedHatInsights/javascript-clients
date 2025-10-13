/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    favoritesGet,
    favoritesPost,
    helptopicsGet,
    helptopicsNameGet,
    progressGet,
    progressIdDelete,
    progressPost,
    quickstartsFiltersGet,
    quickstartsGet,
    quickstartsIdGet,

  } from './index';

const endpointList = {
      favoritesGet,
    favoritesPost,
    helptopicsGet,
    helptopicsNameGet,
    progressGet,
    progressIdDelete,
    progressPost,
    quickstartsFiltersGet,
    quickstartsGet,
    quickstartsIdGet,


};

export const QuickstartsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default QuickstartsClient;
