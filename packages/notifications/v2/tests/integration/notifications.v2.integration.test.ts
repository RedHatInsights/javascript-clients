import { describe, expect, test } from '@jest/globals';

import { NotificationsClient } from '../../api';
import { NotificationResourceV2V2GetLinkedBehaviorGroupsParams } from '../../NotificationResourceV2V2GetLinkedBehaviorGroups';

// client path from spec
const BASE_PATH = 'http://localhost:3002/api/notifications/v2.0';

const client = NotificationsClient(BASE_PATH);

describe('Notifications v2.0', () => {
  test('Retrieve the behavior groups linked to an event type.', async () => {
    const params: NotificationResourceV2V2GetLinkedBehaviorGroupsParams = { eventTypeId: 'ad1a7cd7-0b42-4210-8093-b6c58a23d4b0' };
    const resp = await client.notificationResourceV2V2GetLinkedBehaviorGroups(params);
    expect(resp.status).toBe(200);
  });
});
