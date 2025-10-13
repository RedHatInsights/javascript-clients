/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    favoritesGet,FavoritesGetReturnType,
    favoritesPost,FavoritesPostReturnType,
    helptopicsGet,HelptopicsGetReturnType,
    helptopicsNameGet,HelptopicsNameGetReturnType,
    progressGet,ProgressGetReturnType,
    progressIdDelete,ProgressIdDeleteReturnType,
    progressPost,ProgressPostReturnType,
    quickstartsFiltersGet,QuickstartsFiltersGetReturnType,
    quickstartsGet,QuickstartsGetReturnType,
    quickstartsIdGet,QuickstartsIdGetReturnType,

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

type endpointReturnTypes = {
      favoritesGet: FavoritesGetReturnType,
    favoritesPost: FavoritesPostReturnType,
    helptopicsGet: HelptopicsGetReturnType,
    helptopicsNameGet: HelptopicsNameGetReturnType,
    progressGet: ProgressGetReturnType,
    progressIdDelete: ProgressIdDeleteReturnType,
    progressPost: ProgressPostReturnType,
    quickstartsFiltersGet: QuickstartsFiltersGetReturnType,
    quickstartsGet: QuickstartsGetReturnType,
    quickstartsIdGet: QuickstartsIdGetReturnType,


};

export const QuickstartsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory<typeof endpointList, endpointReturnTypes>(BASE_PATH, endpointList, instance);
}

export default QuickstartsClient;
