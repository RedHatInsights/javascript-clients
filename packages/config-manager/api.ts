/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    createProfile,
    getPlaybook,
    getProfile,
    getProfiles,

  } from './index';

export const ConfigManagerClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, {
    createProfile,
    getPlaybook,
    getProfile,
    getProfiles,

  },
  instance);
}

export default ConfigManagerClient;
