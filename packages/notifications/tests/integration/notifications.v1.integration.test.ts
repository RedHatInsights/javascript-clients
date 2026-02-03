/**
 * Using CommonJS require() for consistency with Jest's default behavior.
 * ESM support in Jest remains experimental as of 2026.
 * @todo Migrate to Vitest for native ESM support and better performance
 */
const { describe, expect, test } = require('@jest/globals');
const { randomUUID } = require('crypto');

const { NotificationsClient } = require('../../api');
// TypeScript type imports (compile-time only)
import type { DrawerResourceV1GetDrawerEntriesParams } from '../../DrawerResourceV1GetDrawerEntries';
import type { EventResourceV1GetEventsParams } from '../../EventResourceV1GetEvents';
import type { DrawerResourceV1UpdateNotificationReadStatusParams } from '../../DrawerResourceV1UpdateNotificationReadStatus';
import type { NotificationResourceV1CreateBehaviorGroupParams } from '../../NotificationResourceV1CreateBehaviorGroup';
import type { CreateBehaviorGroupRequest, UpdateBehaviorGroupRequest } from '../../types';
import type { NotificationResourceV1DeleteBehaviorGroupParams } from '../../NotificationResourceV1DeleteBehaviorGroup';
import type { NotificationResourceV1UpdateBehaviorGroupParams } from '../../NotificationResourceV1UpdateBehaviorGroup';
import type { NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams } from '../../NotificationResourceV1DeleteBehaviorGroupFromEventType';
import type { NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams } from '../../NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint';
import type { NotificationResourceV1UpdateBehaviorGroupActionsParams } from '../../NotificationResourceV1UpdateBehaviorGroupActions';
import type { OrgConfigResourceV1GetDailyDigestTimePreferenceParams } from '../../OrgConfigResourceV1GetDailyDigestTimePreference';
import type { OrgConfigResourceV1SaveDailyDigestTimePreferenceParams } from '../../OrgConfigResourceV1SaveDailyDigestTimePreference';
import type { NotificationResourceV1GetEventTypesParams } from '../../NotificationResourceV1GetEventTypes';
import type { NotificationResourceV1UpdateEventTypeEndpointsParams } from '../../NotificationResourceV1UpdateEventTypeEndpoints';
import type { NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams } from '../../NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup';
import type { NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams } from '../../NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName';
import type { NotificationResourceV1UpdateEventTypeBehaviorsParams } from '../../NotificationResourceV1UpdateEventTypeBehaviors';
import type { NotificationResourceV1AppendBehaviorGroupToEventTypeParams } from '../../NotificationResourceV1AppendBehaviorGroupToEventType';
import type { NotificationResourceV1FindBehaviorGroupsByBundleIdParams } from '../../NotificationResourceV1FindBehaviorGroupsByBundleId';
import type { NotificationResourceV1GetApplicationByNameAndBundleNameParams } from '../../NotificationResourceV1GetApplicationByNameAndBundleName';
import type { NotificationResourceV1GetApplicationsFacetsParams } from '../../NotificationResourceV1GetApplicationsFacets';
import type { NotificationResourceV1GetBundleByNameParams } from '../../NotificationResourceV1GetBundleByName';
import type { NotificationResourceV1GetBundleFacetsParams } from '../../NotificationResourceV1GetBundleFacets';

const BASE_PATH = 'http://localhost:3001';
const client = NotificationsClient(BASE_PATH);

// Generate valid test data for OpenAPI validation
const generateTestData = {
  uuid: () => randomUUID(),
  name: () => `test-${Math.random().toString(36).substring(7)}`,
  description: () => `Test description ${Date.now()}`,
};

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
    const params: DrawerResourceV1UpdateNotificationReadStatusParams = {
      updateNotificationDrawerStatus: {
        notification_ids: [generateTestData.uuid(), generateTestData.uuid()],
        read_status: true,
      },
    };
    const resp = await client.drawerResourceV1UpdateNotificationReadStatus(params);
    expect(resp.status).toBe(200);
  });

  test('create behavior group', async () => {
    const createBehaviorGroupRequest: CreateBehaviorGroupRequest = {
      display_name: generateTestData.name(),
    };
    const params: NotificationResourceV1CreateBehaviorGroupParams = { createBehaviorGroupRequest };
    const resp = await client.notificationResourceV1CreateBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('delete behavior group', async () => {
    const params: NotificationResourceV1DeleteBehaviorGroupParams = { id: generateTestData.uuid() };
    const resp = await client.notificationResourceV1DeleteBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('find behavior groups by bundle id', async () => {
    const params: NotificationResourceV1FindBehaviorGroupsByBundleIdParams = { bundleId: generateTestData.uuid() };
    const resp = await client.notificationResourceV1FindBehaviorGroupsByBundleId(params);
    expect(resp.status).toBe(200);
  });

  test('update behavior group', async () => {
    const updateBehaviorGroupRequest: UpdateBehaviorGroupRequest = {
      display_name: generateTestData.name(),
    };
    const params: NotificationResourceV1UpdateBehaviorGroupParams = { id: generateTestData.uuid(), updateBehaviorGroupRequest };
    const resp = await client.notificationResourceV1UpdateBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('delete behavior group from event type', async () => {
    const params: NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams = {
      behaviorGroupId: generateTestData.uuid(),
      eventTypeId: generateTestData.uuid(),
    };
    const resp = await client.notificationResourceV1DeleteBehaviorGroupFromEventType(params);
    expect(resp.status).toBe(204);
  });

  test('get behavior groups affected by removal of endpoint', async () => {
    const params: NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams = {
      endpointId: generateTestData.uuid(),
    };
    const resp = await client.notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint(params);
    expect(resp.status).toBe(200);
  });

  test('update behavior group actions', async () => {
    const params: NotificationResourceV1UpdateBehaviorGroupActionsParams = {
      behaviorGroupId: generateTestData.uuid(),
      body: [],
    };
    const resp = await client.notificationResourceV1UpdateBehaviorGroupActions(params);
    expect(resp.status).toBe(200);
  });

  test('append behavior group to event type', async () => {
    const params: NotificationResourceV1AppendBehaviorGroupToEventTypeParams = {
      behaviorGroupUuid: generateTestData.uuid(),
      eventTypeUuid: generateTestData.uuid(),
    };
    const resp = await client.notificationResourceV1AppendBehaviorGroupToEventType(params);
    expect(resp.status).toBe(204);
  });

  test('org config - get daily digest time pref', async () => {
    const params: OrgConfigResourceV1GetDailyDigestTimePreferenceParams = {};
    const resp = await client.orgConfigResourceV1GetDailyDigestTimePreference(params);
    expect(resp.status).toBe(200);
  });

  test('org config - save daily digest time pref', async () => {
    const params: OrgConfigResourceV1SaveDailyDigestTimePreferenceParams = {
      body: 'UTC',
    };
    const resp = await client.orgConfigResourceV1SaveDailyDigestTimePreference(params);
    expect(resp.status).toBe(204);
  });

  test('get event types', async () => {
    const params: NotificationResourceV1GetEventTypesParams = {};
    const resp = await client.notificationResourceV1GetEventTypes(params);
    expect(resp.status).toBe(200);
  });

  test('update event types endpoints', async () => {
    const params: NotificationResourceV1UpdateEventTypeEndpointsParams = { eventTypeId: generateTestData.uuid(), body: [] };
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
      eventTypeId: generateTestData.uuid(),
      body: [],
    };
    const resp = await client.notificationResourceV1UpdateEventTypeBehaviors(params);
    expect(resp.status).toBe(200);
  });

  test('get event types affected by removal of behavior group', async () => {
    const params: NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams = {
      behaviorGroupId: generateTestData.uuid(),
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
