import { describe, expect, test } from '@jest/globals';

import { NotificationsClient } from '../../src/v2/api';
import { NotificationResourceV2V2GetLinkedBehaviorGroupsParams } from '../../src/v2/NotificationResourceV2V2GetLinkedBehaviorGroups';

// Note the v2 endpoint path
const BASE_PATH = 'http://localhost:3001/api/notifications/v2.0';
const client = NotificationsClient(BASE_PATH);
const placeHolder = 'testEventTypeId';

describe('Notifications API (v2)', () => {
  test('get linked behavior groups for event type', async () => {
    const params: NotificationResourceV2V2GetLinkedBehaviorGroupsParams = {
      eventTypeId: placeHolder,
    };
    const response = await client.notificationResourceV2V2GetLinkedBehaviorGroups(params);
    expect(response.status).toEqual(200);
  });

  test('get linked behavior groups with pagination', async () => {
    const params: NotificationResourceV2V2GetLinkedBehaviorGroupsParams = {
      eventTypeId: placeHolder,
      limit: 10,
      offset: 0,
      pageNumber: 1,
    };
    const response = await client.notificationResourceV2V2GetLinkedBehaviorGroups(params);
    expect(response.status).toEqual(200);
  });

  test('get linked behavior groups with sorting', async () => {
    const params: NotificationResourceV2V2GetLinkedBehaviorGroupsParams = {
      eventTypeId: placeHolder,
      sortBy: 'name',
      sortBy2: 'created',
    };
    const response = await client.notificationResourceV2V2GetLinkedBehaviorGroups(params);
    expect(response.status).toEqual(200);
  });

  test('get linked behavior groups with all optional parameters', async () => {
    const params: NotificationResourceV2V2GetLinkedBehaviorGroupsParams = {
      eventTypeId: placeHolder,
      limit: 5,
      offset: 10,
      pageNumber: 3,
      sortBy: 'displayName',
      sortBy2: 'updated',
    };
    const response = await client.notificationResourceV2V2GetLinkedBehaviorGroups(params);
    expect(response.status).toEqual(200);
  });
});
