/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    drawerResourceV1GetDrawerEntries,
    drawerResourceV1UpdateNotificationReadStatus,
    eventResourceV1GetEvents,
    notificationResourceV1AppendBehaviorGroupToEventType,
    notificationResourceV1CreateBehaviorGroup,
    notificationResourceV1DeleteBehaviorGroup,
    notificationResourceV1DeleteBehaviorGroupFromEventType,
    notificationResourceV1FindBehaviorGroupsByBundleId,
    notificationResourceV1GetApplicationByNameAndBundleName,
    notificationResourceV1GetApplicationsFacets,
    notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint,
    notificationResourceV1GetBundleByName,
    notificationResourceV1GetBundleFacets,
    notificationResourceV1GetEventTypes,
    notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup,
    notificationResourceV1GetEventTypesByNameAndBundleAndApplicationName,
    notificationResourceV1GetLinkedBehaviorGroups,
    notificationResourceV1GetSeverities,
    notificationResourceV1UpdateBehaviorGroup,
    notificationResourceV1UpdateBehaviorGroupActions,
    notificationResourceV1UpdateEventTypeBehaviors,
    notificationResourceV1UpdateEventTypeEndpoints,
    orgConfigResourceV1GetDailyDigestTimePreference,
    orgConfigResourceV1SaveDailyDigestTimePreference,

  } from './index';

const endpointList = {
      drawerResourceV1GetDrawerEntries,
    drawerResourceV1UpdateNotificationReadStatus,
    eventResourceV1GetEvents,
    notificationResourceV1AppendBehaviorGroupToEventType,
    notificationResourceV1CreateBehaviorGroup,
    notificationResourceV1DeleteBehaviorGroup,
    notificationResourceV1DeleteBehaviorGroupFromEventType,
    notificationResourceV1FindBehaviorGroupsByBundleId,
    notificationResourceV1GetApplicationByNameAndBundleName,
    notificationResourceV1GetApplicationsFacets,
    notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint,
    notificationResourceV1GetBundleByName,
    notificationResourceV1GetBundleFacets,
    notificationResourceV1GetEventTypes,
    notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup,
    notificationResourceV1GetEventTypesByNameAndBundleAndApplicationName,
    notificationResourceV1GetLinkedBehaviorGroups,
    notificationResourceV1GetSeverities,
    notificationResourceV1UpdateBehaviorGroup,
    notificationResourceV1UpdateBehaviorGroupActions,
    notificationResourceV1UpdateEventTypeBehaviors,
    notificationResourceV1UpdateEventTypeEndpoints,
    orgConfigResourceV1GetDailyDigestTimePreference,
    orgConfigResourceV1SaveDailyDigestTimePreference,


};

export const NotificationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default NotificationsClient;
