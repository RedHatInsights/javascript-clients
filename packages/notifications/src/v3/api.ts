import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/common'
import {
    drawerResourceV3GetDrawerEntries,
    drawerResourceV3UpdateNotificationReadStatus,
    eventResourceV3GetEvents,
    notificationResourceV3GetApplicationByNameAndBundleName,
    notificationResourceV3GetApplications,
    notificationResourceV3GetBundleByName,
    notificationResourceV3GetBundles,
    notificationResourceV3GetEventTypeByNameAndBundleAndApplicationName,
    notificationResourceV3GetEventTypes,
    notificationResourceV3GetSeverities,
    notificationResourceV3UpdateEventTypeEndpoints,
    orgConfigResourceV3GetDailyDigestTimePreference,
    orgConfigResourceV3SaveDailyDigestTimePreference,
    userConfigResourceV3GetSubscriptions,
    userConfigResourceV3UpdateSubscriptions,

  } from './index';

const endpointList = {
      drawerResourceV3GetDrawerEntries,
    drawerResourceV3UpdateNotificationReadStatus,
    eventResourceV3GetEvents,
    notificationResourceV3GetApplicationByNameAndBundleName,
    notificationResourceV3GetApplications,
    notificationResourceV3GetBundleByName,
    notificationResourceV3GetBundles,
    notificationResourceV3GetEventTypeByNameAndBundleAndApplicationName,
    notificationResourceV3GetEventTypes,
    notificationResourceV3GetSeverities,
    notificationResourceV3UpdateEventTypeEndpoints,
    orgConfigResourceV3GetDailyDigestTimePreference,
    orgConfigResourceV3SaveDailyDigestTimePreference,
    userConfigResourceV3GetSubscriptions,
    userConfigResourceV3UpdateSubscriptions,


};

export const NotificationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default NotificationsClient;
