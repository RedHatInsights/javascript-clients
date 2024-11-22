/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    createProfile,CreateProfileReturnType,
    getPlaybook,GetPlaybookReturnType,
    getProfile,GetProfileReturnType,
    getProfiles,GetProfilesReturnType,

  } from './index';

const endpointList = {
      createProfile,
    getPlaybook,
    getProfile,
    getProfiles,


};

type endpointReturnTypes = {
      createProfile: CreateProfileReturnType,
    getPlaybook: GetPlaybookReturnType,
    getProfile: GetProfileReturnType,
    getProfiles: GetProfilesReturnType,


};

export const ConfigManagerClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory<typeof endpointList, endpointReturnTypes>(BASE_PATH, endpointList, instance);
}

export default ConfigManagerClient;
