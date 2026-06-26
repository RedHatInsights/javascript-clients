import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/common'
import {
    getOrgPreferences,
    updateOrgPreferences,

  } from './index';

const endpointList = {
      getOrgPreferences,
    updateOrgPreferences,


};

export const RhsmSubscriptionsUtilizationClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default RhsmSubscriptionsUtilizationClient;
