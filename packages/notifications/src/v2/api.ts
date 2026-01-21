/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    notificationResourceV2V2GetLinkedBehaviorGroups,

  } from './index';

const endpointList = {
      notificationResourceV2V2GetLinkedBehaviorGroups,


};

export const NotificationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default NotificationsClient;
