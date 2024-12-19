import { describe, expect, test } from '@jest/globals';

import { NotificationsClient } from '../../api';
import { EventResourceV2GetEventsParams } from '../../EventResourceV2GetEvents';
import { NotificationResourceV2AppendBehaviorGroupToEventTypeParams } from '../../NotificationResourceV2AppendBehaviorGroupToEventType';
import { NotificationResourceV2CreateBehaviorGroupParams } from '../../NotificationResourceV2CreateBehaviorGroup';
import { CreateBehaviorGroupRequest, UpdateBehaviorGroupRequest } from '../../types';
import { NotificationResourceV2GetEventTypesParams } from '../../NotificationResourceV2GetEventTypes';
import { NotificationResourceV2DeleteBehaviorGroupParams } from '../../NotificationResourceV2DeleteBehaviorGroup';
import { NotificationResourceV2FindBehaviorGroupsByBundleIdParams } from '../../NotificationResourceV2FindBehaviorGroupsByBundleId';
import { NotificationResourceV2GetApplicationByNameAndBundleNameParams } from '../../NotificationResourceV2GetApplicationByNameAndBundleName';
import { NotificationResourceV2GetApplicationsFacetsParams } from '../../NotificationResourceV2GetApplicationsFacets';
import { NotificationResourceV2GetBundleByNameParams } from '../../NotificationResourceV2GetBundleByName';
import { NotificationResourceV2GetBundleFacetsParams } from '../../NotificationResourceV2GetBundleFacets';
import { NotificationResourceV2UpdateBehaviorGroupParams } from '../../NotificationResourceV2UpdateBehaviorGroup';
import { NotificationResourceV2UpdateEventTypeEndpointsParams } from '../../NotificationResourceV2UpdateEventTypeEndpoints';
import { NotificationResourceV2DeleteBehaviorGroupFromEventTypeParams } from '../../NotificationResourceV2DeleteBehaviorGroupFromEventType';
import { NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParams } from '../../NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpoint';
import { NotificationResourceV2GetLinkedBehaviorGroupsParams } from '../../NotificationResourceV2GetLinkedBehaviorGroups';
import { NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParams } from '../../NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroup';
import { NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParams } from '../../NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationName';
import { NotificationResourceV2UpdateBehaviorGroupActionsParams } from '../../NotificationResourceV2UpdateBehaviorGroupActions';
import { NotificationResourceV2UpdateEventTypeBehaviorsParams } from '../../NotificationResourceV2UpdateEventTypeBehaviors';
import { OrgConfigResourceV2SaveDailyDigestTimePreferenceParams } from '../../OrgConfigResourceV2SaveDailyDigestTimePreference';
import { OrgConfigResourceV2GetDailyDigestTimePreferenceParams } from '../../OrgConfigResourceV2GetDailyDigestTimePreference';

const BASE_PATH = 'http://localhost:3002/api/notifications/v2.0';
const client = NotificationsClient(BASE_PATH);

describe('Notifications API (v2)', () => {
  test('get events', async () => {
    const params: EventResourceV2GetEventsParams = {};
    const resp = await client.eventResourceV2GetEvents(params);
    expect(resp.status).toBe(200);
  });

  test('append behavior group to event type', async () => {
    const params: NotificationResourceV2AppendBehaviorGroupToEventTypeParams = { behaviorGroupUuid: '1', eventTypeUuid: '1' };
    const resp = await client.notificationResourceV2AppendBehaviorGroupToEventType(params);
    expect(resp.status).toBe(204);
  });

  test('create behavior group', async () => {
    const createBehaviorGroupRequest: CreateBehaviorGroupRequest = {
      display_name: 'test name',
    };
    const params: NotificationResourceV2CreateBehaviorGroupParams = { createBehaviorGroupRequest };
    const resp = await client.notificationResourceV2CreateBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('get event types', async () => {
    const params: NotificationResourceV2GetEventTypesParams = {};
    const resp = await client.notificationResourceV2GetEventTypes(params);
    expect(resp.status).toBe(200);
  });

  test('delete behavior group', async () => {
    const params: NotificationResourceV2DeleteBehaviorGroupParams = { id: '1' };
    const resp = await client.notificationResourceV2DeleteBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('find behavior groups by bundle id', async () => {
    const params: NotificationResourceV2FindBehaviorGroupsByBundleIdParams = { bundleId: '1' };
    const resp = await client.notificationResourceV2FindBehaviorGroupsByBundleId(params);
    expect(resp.status).toBe(200);
  });

  test('get application by name and bundle name', async () => {
    const params: NotificationResourceV2GetApplicationByNameAndBundleNameParams = { applicationName: 'appName', bundleName: 'bundleName' };
    const resp = await client.notificationResourceV2GetApplicationByNameAndBundleName(params);
    expect(resp.status).toBe(200);
  });

  test('get application facets', async () => {
    const params: NotificationResourceV2GetApplicationsFacetsParams = { bundleName: 'bundleName' };
    const resp = await client.notificationResourceV2GetApplicationsFacets(params);
    expect(resp.status).toBe(200);
  });

  test('get bundle by name', async () => {
    const params: NotificationResourceV2GetBundleByNameParams = {
      bundleName: 'bundleName',
    };
    const resp = await client.notificationResourceV2GetBundleByName(params);
    expect(resp.status).toBe(200);
  });

  test('get bundle facets', async () => {
    const params: NotificationResourceV2GetBundleFacetsParams = {};
    const resp = await client.notificationResourceV2GetBundleFacets(params);
    expect(resp.status).toBe(200);
  });

  test('update behavior group', async () => {
    const updateBehaviorGroupRequest: UpdateBehaviorGroupRequest = {
      display_name: 'updated name',
    };
    const params: NotificationResourceV2UpdateBehaviorGroupParams = { id: '1', updateBehaviorGroupRequest };
    const resp = await client.notificationResourceV2UpdateBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('update event types endpoints', async () => {
    const params: NotificationResourceV2UpdateEventTypeEndpointsParams = { eventTypeId: '1' };
    const resp = await client.notificationResourceV2UpdateEventTypeEndpoints(params);
    expect(resp.status).toBe(200);
  });

  test('delete behavior group from event type', async () => {
    const params: NotificationResourceV2DeleteBehaviorGroupFromEventTypeParams = { behaviorGroupId: '12', eventTypeId: '13' };
    const resp = await client.notificationResourceV2DeleteBehaviorGroupFromEventType(params);
    expect(resp.status).toBe(204);
  });

  test('get behavior groups affected by removal of endpoint', async () => {
    const params: NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParams = {
      endpointId: '1',
    };
    const resp = await client.notificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpoint(params);
    expect(resp.status).toBe(200);
  });

  test('get linked behavior groups', async () => {
    const params: NotificationResourceV2GetLinkedBehaviorGroupsParams = {
      eventTypeId: '1',
    };
    const resp = await client.notificationResourceV2GetLinkedBehaviorGroups(params);
    expect(resp.status).toBe(200);
  });

  test('get event types affected by removal of behavior group', async () => {
    const params: NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParams = {
      behaviorGroupId: '1',
    };
    const resp = await client.notificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('get event types by name and bundle and application name', async () => {
    const params: NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParams = {
      applicationName: 'appName',
      bundleName: 'bundleName',
      eventTypeName: 'eventTypeName',
    };
    const resp = await client.notificationResourceV2GetEventTypesByNameAndBundleAndApplicationName(params);
    expect(resp.status).toBe(200);
  });

  test('update behavior group actions', async () => {
    const params: NotificationResourceV2UpdateBehaviorGroupActionsParams = {
      behaviorGroupId: 'behaviorGroupId',
    };
    const resp = await client.notificationResourceV2UpdateBehaviorGroupActions(params);
    expect(resp.status).toBe(200);
  });

  test('update event type behaviors', async () => {
    const params: NotificationResourceV2UpdateEventTypeBehaviorsParams = {
      eventTypeId: 'eventTypeId',
    };
    const resp = await client.notificationResourceV2UpdateEventTypeBehaviors(params);
    expect(resp.status).toBe(200);
  });

  test('org config - get daily digest time pref', async () => {
    const params: OrgConfigResourceV2GetDailyDigestTimePreferenceParams = {};
    const resp = await client.orgConfigResourceV2GetDailyDigestTimePreference(params);
    expect(resp.status).toBe(200);
  });

  test('org config - save daily digest time pref', async () => {
    const params: OrgConfigResourceV2SaveDailyDigestTimePreferenceParams = {};
    const resp = await client.orgConfigResourceV2SaveDailyDigestTimePreference(params);
    expect(resp.status).toBe(204);
  });
});
