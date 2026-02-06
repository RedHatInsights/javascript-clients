import { describe, expect, test } from '@jest/globals';
const { randomUUID } = require('crypto');

import { NotificationsClient } from '../../src/v2/api';
import { NotificationResourceV2GetLinkedBehaviorGroupsParams } from '../../src/v2/NotificationResourceV2GetLinkedBehaviorGroups';

// Note the v2 endpoint path
const BASE_PATH = 'http://localhost:3001';
const client = NotificationsClient(BASE_PATH);

// Generate valid test data for OpenAPI validation
const generateTestData = {
  uuid: () => randomUUID(),
  name: () => `test-${Math.random().toString(36).substring(7)}`,
  description: () => `Test description ${Date.now()}`,
};

describe('Notifications API (v2)', () => {
  test('get linked behavior groups for event type', async () => {
    const params: NotificationResourceV2GetLinkedBehaviorGroupsParams = {
      eventTypeId: generateTestData.uuid(),
    };
    const response = await client.notificationResourceV2GetLinkedBehaviorGroups(params);
    expect(response.status).toEqual(200);
  });

  test('get linked behavior groups with pagination', async () => {
    const params: NotificationResourceV2GetLinkedBehaviorGroupsParams = {
      eventTypeId: generateTestData.uuid(),
      limit: 10,
      offset: 0,
      pageNumber: 1,
    };
    const response = await client.notificationResourceV2GetLinkedBehaviorGroups(params);
    expect(response.status).toEqual(200);
  });

  test('get linked behavior groups with sorting', async () => {
    const params: NotificationResourceV2GetLinkedBehaviorGroupsParams = {
      eventTypeId: generateTestData.uuid(),
      sortBy: 'name',
      sortBy2: 'created',
    };
    const response = await client.notificationResourceV2GetLinkedBehaviorGroups(params);
    expect(response.status).toEqual(200);
  });

  test('get linked behavior groups with all optional parameters', async () => {
    const params: NotificationResourceV2GetLinkedBehaviorGroupsParams = {
      eventTypeId: generateTestData.uuid(),
      limit: 5,
      offset: 10,
      pageNumber: 3,
      sortBy: 'displayName',
      sortBy2: 'updated',
    };
    const response = await client.notificationResourceV2GetLinkedBehaviorGroups(params);
    expect(response.status).toEqual(200);
  });
});
