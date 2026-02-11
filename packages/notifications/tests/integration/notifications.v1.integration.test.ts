/**
 * Using CommonJS require() for consistency with Jest's default behavior.
 * ESM support in Jest remains experimental as of 2026.
 * @todo Migrate to Vitest for native ESM support and better performance
 */
const { describe, expect, test } = require('@jest/globals');
const { randomUUID } = require('crypto');

import { NotificationsClient } from '../../src/api';
import { DrawerResourceV1GetDrawerEntriesParams } from '../../src/DrawerResourceV1GetDrawerEntries';
import { EventResourceV1GetEventsParams } from '../../src/EventResourceV1GetEvents';
import { DrawerResourceV1UpdateNotificationReadStatusParams } from '../../src/DrawerResourceV1UpdateNotificationReadStatus';
import { NotificationResourceV1CreateBehaviorGroupParams } from '../../src/NotificationResourceV1CreateBehaviorGroup';
import { CreateBehaviorGroupRequest, UpdateBehaviorGroupRequest } from '../../src/types';
import { NotificationResourceV1DeleteBehaviorGroupParams } from '../../src/NotificationResourceV1DeleteBehaviorGroup';
import { NotificationResourceV1UpdateBehaviorGroupParams } from '../../src/NotificationResourceV1UpdateBehaviorGroup';
import { NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams } from '../../src/NotificationResourceV1DeleteBehaviorGroupFromEventType';
import { NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams } from '../../src/NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint';
import { NotificationResourceV1UpdateBehaviorGroupActionsParams } from '../../src/NotificationResourceV1UpdateBehaviorGroupActions';
import { OrgConfigResourceV1GetDailyDigestTimePreferenceParams } from '../../src/OrgConfigResourceV1GetDailyDigestTimePreference';
import { OrgConfigResourceV1SaveDailyDigestTimePreferenceParams } from '../../src/OrgConfigResourceV1SaveDailyDigestTimePreference';
import { NotificationResourceV1GetEventTypesParams } from '../../src/NotificationResourceV1GetEventTypes';
import { NotificationResourceV1UpdateEventTypeEndpointsParams } from '../../src/NotificationResourceV1UpdateEventTypeEndpoints';
import { NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams } from '../../src/NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup';
import { NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams } from '../../src/NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName';
import { NotificationResourceV1UpdateEventTypeBehaviorsParams } from '../../src/NotificationResourceV1UpdateEventTypeBehaviors';
import { NotificationResourceV1AppendBehaviorGroupToEventTypeParams } from '../../src/NotificationResourceV1AppendBehaviorGroupToEventType';
import { NotificationResourceV1FindBehaviorGroupsByBundleIdParams } from '../../src/NotificationResourceV1FindBehaviorGroupsByBundleId';
import { NotificationResourceV1GetApplicationByNameAndBundleNameParams } from '../../src/NotificationResourceV1GetApplicationByNameAndBundleName';
import { NotificationResourceV1GetApplicationsFacetsParams } from '../../src/NotificationResourceV1GetApplicationsFacets';
import { NotificationResourceV1GetBundleByNameParams } from '../../src/NotificationResourceV1GetBundleByName';
import { NotificationResourceV1GetBundleFacetsParams } from '../../src/NotificationResourceV1GetBundleFacets';

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
