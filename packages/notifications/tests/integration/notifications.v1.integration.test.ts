import { describe, expect, test } from '@jest/globals';

import { NotificationsClient } from '../../api';
import { DrawerResourceV1GetDrawerEntriesParams } from '../../DrawerResourceV1GetDrawerEntries';
import { EventResourceV1GetEventsParams } from '../../EventResourceV1GetEvents';
import { DrawerResourceV1UpdateNotificationReadStatusParams } from '../../DrawerResourceV1UpdateNotificationReadStatus';
import { NotificationResourceV1CreateBehaviorGroupParams } from '../../NotificationResourceV1CreateBehaviorGroup';
import { CreateBehaviorGroupRequest } from '../../types';
import { NotificationResourceV1DeleteBehaviorGroupParams } from '../../NotificationResourceV1DeleteBehaviorGroup';
import { UpdateBehaviorGroupRequest } from '../../v2/types';
import { NotificationResourceV1UpdateBehaviorGroupParams } from '../../NotificationResourceV1UpdateBehaviorGroup';
import { NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams } from '../../NotificationResourceV1DeleteBehaviorGroupFromEventType';
import { NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams } from '../../NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint';
import { NotificationResourceV1UpdateBehaviorGroupActionsParams } from '../../NotificationResourceV1UpdateBehaviorGroupActions';
import { OrgConfigResourceV1GetDailyDigestTimePreferenceParams } from '../../OrgConfigResourceV1GetDailyDigestTimePreference';
import { OrgConfigResourceV1SaveDailyDigestTimePreferenceParams } from '../../OrgConfigResourceV1SaveDailyDigestTimePreference';
import { NotificationResourceV1GetEventTypesParams } from '../../NotificationResourceV1GetEventTypes';
import { NotificationResourceV1UpdateEventTypeEndpointsParams } from '../../NotificationResourceV1UpdateEventTypeEndpoints';
import { NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams } from '../../NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup';
import { NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams } from '../../NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName';
import { NotificationResourceV1UpdateEventTypeBehaviorsParams } from '../../NotificationResourceV1UpdateEventTypeBehaviors';
import { NotificationResourceV1AppendBehaviorGroupToEventTypeParams } from '../../NotificationResourceV1AppendBehaviorGroupToEventType';
import { NotificationResourceV1FindBehaviorGroupsByBundleIdParams } from '../../NotificationResourceV1FindBehaviorGroupsByBundleId';
import { NotificationResourceV1GetApplicationByNameAndBundleNameParams } from '../../NotificationResourceV1GetApplicationByNameAndBundleName';
import { NotificationResourceV1GetApplicationsFacetsParams } from '../../NotificationResourceV1GetApplicationsFacets';
import { NotificationResourceV1GetBundleByNameParams } from '../../NotificationResourceV1GetBundleByName';
import { NotificationResourceV1GetBundleFacetsParams } from '../../NotificationResourceV1GetBundleFacets';

const BASE_PATH = 'http://localhost:3001/api/notifications/v1.0';
const client = NotificationsClient(BASE_PATH);

describe('Notifications API (v1)', () => {
  test('get drawer entries', async () => {
    const params: DrawerResourceV1GetDrawerEntriesParams = {};
    const resp = await client.drawerResourceV1GetDrawerEntries(params);
    expect(resp.status).toBe(200);
  });

  test('get events', async () => {
    const params: EventResourceV1GetEventsParams = {};
    const resp = await client.eventResourceV1GetEvents(params);
    expect(resp.status).toBe(200);
  });

  test('update notification read status', async () => {
    const params: DrawerResourceV1UpdateNotificationReadStatusParams = {};
    const resp = await client.drawerResourceV1UpdateNotificationReadStatus(params);
    expect(resp.status).toBe(200);
  });

  test('create behavior group', async () => {
    const createBehaviorGroupRequest: CreateBehaviorGroupRequest = {
      display_name: 'test name',
    };
    const params: NotificationResourceV1CreateBehaviorGroupParams = { createBehaviorGroupRequest };
    const resp = await client.notificationResourceV1CreateBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('delete behavior group', async () => {
    const params: NotificationResourceV1DeleteBehaviorGroupParams = { id: '1' };
    const resp = await client.notificationResourceV1DeleteBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('find behavior groups by bundle id', async () => {
    const params: NotificationResourceV1FindBehaviorGroupsByBundleIdParams = { bundleId: '1' };
    const resp = await client.notificationResourceV1FindBehaviorGroupsByBundleId(params);
    expect(resp.status).toBe(200);
  });

  test('update behavior group', async () => {
    const updateBehaviorGroupRequest: UpdateBehaviorGroupRequest = {
      display_name: 'updated name',
    };
    const params: NotificationResourceV1UpdateBehaviorGroupParams = { id: '1', updateBehaviorGroupRequest };
    const resp = await client.notificationResourceV1UpdateBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('delete behavior group from event type', async () => {
    const params: NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams = { behaviorGroupId: '12', eventTypeId: '13' };
    const resp = await client.notificationResourceV1DeleteBehaviorGroupFromEventType(params);
    expect(resp.status).toBe(204);
  });

  test('get behavior groups affected by removal of endpoint', async () => {
    const params: NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams = {
      endpointId: '1',
    };
    const resp = await client.notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint(params);
    expect(resp.status).toBe(200);
  });

  test('update behavior group actions', async () => {
    const params: NotificationResourceV1UpdateBehaviorGroupActionsParams = {
      behaviorGroupId: 'behaviorGroupId',
    };
    const resp = await client.notificationResourceV1UpdateBehaviorGroupActions(params);
    expect(resp.status).toBe(200);
  });

  test('append behavior group to event type', async () => {
    const params: NotificationResourceV1AppendBehaviorGroupToEventTypeParams = { behaviorGroupUuid: '1', eventTypeUuid: '1' };
    const resp = await client.notificationResourceV1AppendBehaviorGroupToEventType(params);
    expect(resp.status).toBe(204);
  });

  test('org config - get daily digest time pref', async () => {
    const params: OrgConfigResourceV1GetDailyDigestTimePreferenceParams = {};
    const resp = await client.orgConfigResourceV1GetDailyDigestTimePreference(params);
    expect(resp.status).toBe(200);
  });

  test('org config - save daily digest time pref', async () => {
    const params: OrgConfigResourceV1SaveDailyDigestTimePreferenceParams = {};
    const resp = await client.orgConfigResourceV1SaveDailyDigestTimePreference(params);
    expect(resp.status).toBe(204);
  });

  test('get event types', async () => {
    const params: NotificationResourceV1GetEventTypesParams = {};
    const resp = await client.notificationResourceV1GetEventTypes(params);
    expect(resp.status).toBe(200);
  });

  test('update event types endpoints', async () => {
    const params: NotificationResourceV1UpdateEventTypeEndpointsParams = { eventTypeId: '1' };
    const resp = await client.notificationResourceV1UpdateEventTypeEndpoints(params);
    expect(resp.status).toBe(200);
  });

  test('get event types by name and bundle and application name', async () => {
    const params: NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams = {
      applicationName: 'appName',
      bundleName: 'bundleName',
      eventTypeName: 'eventTypeName',
    };
    const resp = await client.notificationResourceV1GetEventTypesByNameAndBundleAndApplicationName(params);
    expect(resp.status).toBe(200);
  });

  test('update event type behaviors', async () => {
    const params: NotificationResourceV1UpdateEventTypeBehaviorsParams = {
      eventTypeId: 'eventTypeId',
    };
    const resp = await client.notificationResourceV1UpdateEventTypeBehaviors(params);
    expect(resp.status).toBe(200);
  });

  test('get event types affected by removal of behavior group', async () => {
    const params: NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams = {
      behaviorGroupId: '1',
    };
    const resp = await client.notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('get event types by name and bundle and application name', async () => {
    const params: NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams = {
      applicationName: 'appName',
      bundleName: 'bundleName',
      eventTypeName: 'eventTypeName',
    };
    const resp = await client.notificationResourceV1GetEventTypesByNameAndBundleAndApplicationName(params);
    expect(resp.status).toBe(200);
  });

  test('get application by name and bundle name', async () => {
    const params: NotificationResourceV1GetApplicationByNameAndBundleNameParams = { applicationName: 'appName', bundleName: 'bundleName' };
    const resp = await client.notificationResourceV1GetApplicationByNameAndBundleName(params);
    expect(resp.status).toBe(200);
  });

  test('get application facets', async () => {
    const params: NotificationResourceV1GetApplicationsFacetsParams = { bundleName: 'bundleName' };
    const resp = await client.notificationResourceV1GetApplicationsFacets(params);
    expect(resp.status).toBe(200);
  });

  test('get bundle by name', async () => {
    const params: NotificationResourceV1GetBundleByNameParams = {
      bundleName: 'bundleName',
    };
    const resp = await client.notificationResourceV1GetBundleByName(params);
    expect(resp.status).toBe(200);
  });

  test('get bundle facets', async () => {
    const params: NotificationResourceV1GetBundleFacetsParams = {};
    const resp = await client.notificationResourceV1GetBundleFacets(params);
    expect(resp.status).toBe(200);
  });
});
