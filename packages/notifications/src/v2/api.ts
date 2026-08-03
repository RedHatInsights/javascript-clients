import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/common'
import {
    notificationResourceV2GetLinkedBehaviorGroups,

  } from './index';

const endpointList = {
      notificationResourceV2GetLinkedBehaviorGroups,


};

export const NotificationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default NotificationsClient;
